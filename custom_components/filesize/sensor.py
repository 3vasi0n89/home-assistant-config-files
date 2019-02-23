"""
Sensor for monitoring the size of a file.
For more details about this platform, please refer to the documentation at
https://home-assistant.io/components/sensor.filesize/
"""
import datetime
import logging
import os

import voluptuous as vol

from homeassistant.helpers.entity import Entity
import homeassistant.helpers.config_validation as cv
from homeassistant.components.sensor import PLATFORM_SCHEMA

_LOGGER = logging.getLogger(__name__)


CONF_FILE_PATHS = 'file_paths'
ICON = 'mdi:file'

PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend({
    vol.Required(CONF_FILE_PATHS):
        vol.All(cv.ensure_list, [cv.isfile]),
})


def setup_platform(hass, config, add_devices, discovery_info=None):
    """Set up the file size sensor."""
    sensors = []
    for path in config.get(CONF_FILE_PATHS):
        if not hass.config.is_allowed_path(path):
            _LOGGER.error(
                "Filepath %s is not valid or allowed", path)
            continue
        else:
            sensors.append(Filesize(path))

    if sensors:
        add_devices(sensors, True)


class Filesize(Entity):
    """Encapsulates file size information."""

    def __init__(self, path):
        """Initialize the data object."""
        self._path = path   # Need to check its a valid path
        self._size = None
        self._last_updated = None
        self._name = path.split("/")[-1]
        self._unit_of_measurement = 'MB'

    def update(self):
        """Update the sensor."""
        statinfo = os.stat(self._path)
        self._size = statinfo.st_size
        last_updated = datetime.datetime.fromtimestamp(statinfo.st_mtime)
        self._last_updated = last_updated.isoformat()

    @property
    def name(self):
        """Return the name of the sensor."""
        return self._name

    @property
    def state(self):
        """Return the size of the file in MB."""
        decimals = 2
        state_mb = round(self._size/1e6, decimals)
        return state_mb

    @property
    def icon(self):
        """Icon to use in the frontend, if any."""
        return ICON

    @property
    def device_state_attributes(self):
        """Return other details about the sensor state."""
        attr = {
            'path': self._path,
            'last_updated': self._last_updated,
            'bytes': self._size,
            }
        return attr

    @property
    def unit_of_measurement(self):
        """Return the unit of measurement of this entity, if any."""
        return self._unit_of_measurement