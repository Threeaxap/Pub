from rest_framework import serializers
from .models import *
from bra.product_bra_cup_size_variant.serializer import *
from bra.product_bra_size.serializer import *


class ProductBraUnitSerializer(serializers.ModelSerializer):
    variant = ProductBraCupSizeVariantSerializer(read_only=True)
    size = ProductBraSizeSerializer(read_only=True)
    
    variant_id = serializers.PrimaryKeyRelatedField(
        queryset=ProductBraCupSizeVariant.objects.all(),
        source='variant',
        write_only=True
    )
    size_id = serializers.PrimaryKeyRelatedField(
        queryset=ProductBraSize.objects.all(),
        source='size',
        write_only=True
    )
    
    class Meta:
        model = ProductBraUnit
        fields = ['id', 'variant', 'size', 'variant_id', 'size_id']
    
    def create(self, validated_data):
        # Просто создаем объект - сериализатор автоматически подгрузит связи
        return super().create(validated_data)











































































































































































