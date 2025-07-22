from django.urls import path, include
from rest_framework.routers import DefaultRouter
from product_underwear_model.views import *
from product_underwear_color.views import *
from product_underwear_image.views import *
from product_underwear_size.views import *
from product_underwear_gender.views import *
from .views import *

router = DefaultRouter()
router.register(r'product_underwear', ProductBraModelViewset)
router.register(r'product_underwear_color', ProductUnderwearColorViewset)
router.register(r'product_underwear_image', ProductUnderwearImageViewset)
router.register(r'product_underwear_size', ProductUnderwearSizeViewset)
router.register(r'product_underwear_cupsize', ProductUnderwearGenderViewset)
router.register(r'product_underwear_variant', ProductUnderwearVariantViewset)

urlpatterns = [
    path('', include(router.urls)),
]