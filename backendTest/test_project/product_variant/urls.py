from django.urls import path, include
from product_model.views import *
from product_color.views import *
from product_image.views import *
from product_size.views import *
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'product',ProductModelViewset),
router.register(r'productcolor',ProductColorViewset),
router.register(r'productimage',ProductImageViewset),
router.register(r'productsize',ProductSizeViewset),
router.register(r'productvariant',ProductVariantViewset),



urlpatterns = [
    path('', include(router.urls)),
]