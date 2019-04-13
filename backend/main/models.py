from django.db import models
from unixtimestampfield.fields import UnixTimeStampField
from django.utils import timezone

class Bandwidth(models.Model):
    device_id = models.CharField(max_length=256, default='device_id')
    bytes_ts = models.IntegerField(default=None)
    bytes_fs = models.IntegerField(default=None)
    timestamp = UnixTimeStampField(default=None)

    def __str__(self):
        return '%s created at %s' (self.device_id, self.timestamp)
    
    