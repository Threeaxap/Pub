from django.urls import path, include
from rest_framework.routers import DefaultRouter
from product_bra_model.views import *
from product_bra_color.views import *
from product_bra_image.views import *
from product_bra_size.views import *
from product_bra_cup_size.views import *
from .views import *

router = DefaultRouter()
router.register(r'product_bra', ProductBraModelViewset)
router.register(r'product_bra_color', ProductBraColorViewset)
router.register(r'product_bra_image', ProductBraImageViewset)
router.register(r'product_bra_size', ProductBraSizeViewset)
router.register(r'product_bra_cupsize', ProductBraCupSizeViewset)
router.register(r'product_bra_variant', ProductBraVariantViewset)

urlpatterns = [
    path('', include(router.urls)),
]