from django.shortcuts import render
# from rest_framework import viewsets
from rest_framework import generics, status

from .serializers import BandwidthSerializer
from .models import Bandwidth
from rest_framework.response import Response
from rest_framework.views import APIView

class BandwidthView(generics.ListCreateAPIView):
    serializer_class = BandwidthSerializer
    queryset = Bandwidth.objects.all()
