from django.contrib import admin
from django.urls import path
from .views import BandwidthView

urlpatterns = [
    path('bandwidth', BandwidthView.as_view())
]