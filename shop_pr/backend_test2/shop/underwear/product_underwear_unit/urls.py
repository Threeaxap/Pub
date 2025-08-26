from django.urls import path, include
from rest_framework.routers import DefaultRouter
from underwear.product_underwear_model.views import *
from underwear.product_underwear_color.views import *
from underwear.product_underwear_image.views import *
from underwear.product_underwear_size.views import *
from underwear.product_underwear_gender.views import *
from underwear.product_underwear_variant. views import *
from .views import *

router = DefaultRouter()
router.register(r'product_underwear', ProductUnderwearModelViewset)
router.register(r'product_underwear_color', ProductUnderwearColorViewset)
router.register(r'product_underwear_image', ProductUnderwearImageViewset)
router.register(r'product_underwear_size', ProductUnderwearSizeViewset)
router.register(r'product_underwear_gender', ProductUnderwearGenderViewset)
router.register(r'product_underwear_variant', ProductUnderwearVariantViewset)
router.register(r'product_underwear_unit', ProductUnderwearUnitViewset)

urlpatterns = [
    path('', include(router.urls)),
]