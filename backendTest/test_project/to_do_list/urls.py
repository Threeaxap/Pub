from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'product',Productviewset),
router.register(r'productimage',ProductImageviewset),
router.register(r'productsize',ProductSizeviewset),
router.register(r'productvariant',ProductVariantviewset),



urlpatterns = [
    path('', include(router.urls)),
]