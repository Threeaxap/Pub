from django.urls import path, include
from rest_framework.routers import DefaultRouter
from underwear.product_model_underwear.views import ProductModelViewset
from underwear.product_color_underwear.views import ProductColorViewset
from underwear.product_image_underwear.views import ProductImageViewset
from underwear.product_size_underwear.views import ProductSizeViewset
from underwear.product_gender_underwear.views import ProductGenderViewset
from underwear.product_variant_underwear.views import ProductVariantViewset

router = DefaultRouter()
router.register(r'product_underwear', ProductModelViewset)
router.register(r'productgender_underwear', ProductGenderViewset)
router.register(r'productcolor_underwear', ProductColorViewset)
router.register(r'productimage_underwear', ProductImageViewset)
router.register(r'productsize_underwear', ProductSizeViewset)
router.register(r'productvariant_underwear', ProductVariantViewset)

urlpatterns = [
    path('', include(router.urls)),
]