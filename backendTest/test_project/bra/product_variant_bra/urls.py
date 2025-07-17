from django.urls import path, include
from rest_framework.routers import DefaultRouter
from bra.product_model_bra.views import ProductModelBraViewset
from bra.product_color_bra.views import ProductColorBraViewset
from bra.product_image_bra.views import ProductImageBraViewset
from bra.product_size_bra.views import ProductSizeBraViewset
from bra.product_cup_size_bra.views import ProductCupSizeBraViewset
from bra.product_variant_bra.views import ProductVariantBraViewset

router = DefaultRouter()
router.register(r'product_bra', ProductModelBraViewset)
router.register(r'productcolor_bra', ProductColorBraViewset)
router.register(r'productimage_bra', ProductImageBraViewset)
router.register(r'productsize_bra', ProductSizeBraViewset)
router.register(r'productcupsize_bra', ProductCupSizeBraViewset)
router.register(r'productvariant_bra', ProductVariantBraViewset)

urlpatterns = [
    path('', include(router.urls)),
]