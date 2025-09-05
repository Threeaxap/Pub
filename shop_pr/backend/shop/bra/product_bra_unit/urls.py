from django.urls import path, include
from rest_framework.routers import DefaultRouter
from bra.product_bra_model.views import *
from bra.product_bra_color.views import *
from bra.product_bra_image.views import *
from bra.product_bra_size.views import *
from bra.product_bra_cup_size.views import *
from bra.product_bra_variant.views import *
from bra.product_bra_cup_size_variant.views import *
from bra.product_bra_unit.views import *

router = DefaultRouter()
router.register(r'product_bra', ProductBraModelViewset)
router.register(r'product_bra_color', ProductBraColorViewset)
router.register(r'product_bra_image', ProductBraImageViewset)
router.register(r'product_bra_size', ProductBraSizeViewset)
router.register(r'product_bra_cupsize', ProductBraCupSizeViewset)
router.register(r'product_bra_variant', ProductBraVariantViewset)
router.register(r'product_bra_cup_size_variant', ProductBraCupSizeVariantViewset)
router.register(r'product_bra_unit', ProductBraUnitViewset)

urlpatterns = [
    path('', include(router.urls)),
]