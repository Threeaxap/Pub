const ProductImage = ({ variant, product, className }) => {
  const imageUrl = variant?.product_image?.image || 
                   product?.variants?.[0]?.product_image?.image;
  
  if (imageUrl) {
    return (
      <img 
        src={imageUrl} 
        alt={variant?.product_image?.name || product?.name}
        className={className}
      />
    );
  }
  
  return (
    <div className={`${className} bg-black text-white flex items-center justify-center`}>
      No image
    </div>
  );
};

export default ProductImage
// Использование в карточке:
{/* <ProductImage 
  product={product} 
  className="zaglushka-image"
/>

// Использование в модальном окне:
<ProductImage 
  variant={selectedColor}
  product={product}
  className="zaglushka-image"
/> */}