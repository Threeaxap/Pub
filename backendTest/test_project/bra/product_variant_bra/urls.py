from django.urls import path, include
from bra.product_model_bra.views import *
from bra.product_color_bra.views import *
from bra.product_image_bra.views import *
from bra.product_size_bra.views import *
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