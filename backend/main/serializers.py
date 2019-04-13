from rest_framework import serializers
from .models import Bandwidth

class BandwidthSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bandwidth
        exclude = []