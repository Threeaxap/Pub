import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Modal from '@mui/material/Modal'
import './Card.css'
import { motion, AnimatePresence } from "motion/react"
import AnimatedList from './AnimatedList'
import ProductImage from './ImageComp'
import { data } from '../../data/data'
import { Slider, Typography, Box } from '@mui/material';
import { orange } from '@mui/material/colors'

const Products = () => {
  const [products, setProducts] = useState([])
  const [allProducts, setAllProducts] = useState([]) // Все загруженные продукты
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedColorList, setSelectedColorList] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const [searchSettings, openSearchSettings] = useState(null)
  const [searchInput, setSearchInput] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [hasSearched, setHasSearched] = useState(false)
  const [filters, setFilters] = useState({
    cup_size: '',
    size: '',                 
  })
    const [tempFilters, setTempFilters] = useState({
    cup_size: '',
    size: '',                 
  })
  const [price, setPrice] = useState([0, 4000]);
  console.log('Current price:', price);
  console.log(filters)
  const [tempPrice, setTempPrice] = useState([0, 4000]);

  const handleColorSelect = (colorVariant) => {
    if (selectedColor?.id === colorVariant.id) {
      setSelectedColor(null)
    } else {
      setSelectedColor(colorVariant)
      setSelectedSize(null)
    }
  }

  const handleOpenSearchSettings = () => {
    setTempFilters({...filters});
    setTempPrice([...price]);
    openSearchSettings(true)
  }

  const handleCloseSearchSettings = () => {
    openSearchSettings(false)
  }

  const handleOpen = (product) => {
    setSelectedProduct(product)
    setSelectedColor(null)
    setSelectedSize(null)
  }
  const handleClose = () => {
    setSelectedProduct(null)
    setSelectedColor(null)
    setSelectedSize(null)
  }

  // Обработчик кнопки поиска
  const handleSearchClick = () => {
    setSearchQuery(searchInput)
    setHasSearched(true)
  }

  // Обработчик нажатия Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setSearchQuery(searchInput)
      setHasSearched(true)
    }
  }

  useEffect(() => {
    setSearchQuery('');
    }, []);

  useEffect(() => {
  setHasSearched(true);
}, []);

useEffect(() => {
  if (!hasSearched) return;

  setLoading(true);
  
  const searchUrl = searchQuery 
    ? `http://127.0.0.1:8000/api/bra/product_bra/?search=${searchQuery}`
    : 'http://127.0.0.1:8000/api/bra/product_bra/';

  Promise.all([
    axios.get(searchUrl),
    axios.get('http://127.0.0.1:8000/api/bra/product_bra_variant/'),
    axios.get('http://127.0.0.1:8000/api/bra/product_bra_unit/')
  ])
    .then(([modelResponse, variantResponse, unitResponse]) => {
      const models = modelResponse.data
      const variants = variantResponse.data
      const units = unitResponse.data

      const productsWithData = models.map(model => {
        const productVariants = variants.filter(v => v.product_model?.id === model.id)
        const productUnits = units.filter(u => u?.product_variant?.product_model?.id === model.id)
        return {
          ...model,
          variants: productVariants,
          units: productUnits
        }
      })

      setAllProducts(productsWithData)
      setFilteredProducts(productsWithData)
      setLoading(false)
    })
    
    .catch(error => {
      console.error('Ошибка при загрузке данных', error)
      setLoading(false)
    })
}, [searchQuery, hasSearched])

useEffect(() => {
  const filtered = allProducts.filter(product => {
    if (product.price < price[0] || product.price > price[1]) return false;
    if (filters.size && !product.units.some(u =>
      u.product_size?.size?.toString().trim() === filters.size.toString().trim()
    )) return false;
    if (filters.cup_size && !product.units.some(u =>
      u.product_cup_size?.size?.toString().trim() === filters.cup_size.toString().trim()
    )) return false;
    return true;
  });
  setFilteredProducts(filtered)
}, [allProducts, filters, price])

  return (
    <div>
        <div className='search-div'>
          <div onClick={handleOpenSearchSettings} className='searchsettings-div'>
            <p>Настройки поиска</p>
            {data.images.filter(i => i.id === 7).map( item => (
              <img className='searchsettings-icon' onClick={handleClose} key={item.id} src={item.image} alt="" />
            ))}
          </div>
          {searchSettings && (
              <AnimatePresence>
                <motion.div
                  initial={{ y: -223, opacity: 0 }}
                  animate={{ y: -15, opacity: 1 }}
                  exit={{ y: -223, opacity: 0  }}
                  transition={{ type: "tween", stiffness: 100, damping: 30 }}
                  style={{
                    zIndex: -3,
                    display: 'grid',
                    width: "fit-content",
                    height: "fit-content",
                    paddingTop: '32',
                    border: "1px solid #d1c1a9",
                    borderRadius: '7px',
                    padding: '12px',
                    position: "absolute",
                    top: '100%',
                    left: '0',
                    
                  }}
                >
                  <div className='slider-div'>
                    <p class='mb-[4px]'>Цена:</p>
                    <p>{tempPrice[0]}₽ - {tempPrice[1]}₽</p>
                    <Slider
                      value={tempPrice}
                      onChange={(e, newValue) => setTempPrice(newValue)}
                      valueLabelFormat={(value) => `${value}₽`}
                      min={0}
                      max={4000}
                      step={100}
                      sx={{
                        '& .MuiSlider-thumb': {
                            backgroundColor: '#ff6a00',
                            height: '16px',
                            width: '16px',
                            '&:hover, &.Mui-focusVisible': {
                                boxShadow: '0px 0px 0px 8px #ff6a0044',
                            },
                            '&.Mui-active': {
                                boxShadow: '0px 0px 0px 12px #ff6a0044',
                            }
                        },
                        '& .MuiSlider-track': {
                            color: '#ff6a00',
                        },
                        '& .MuiSlider-rail': {
                            border: '1px solid #d1c1a9',
                            color: '#d1c1a9',
                        },
                    }}
                    />
                  </div>
                  <div className='setsize-div'>
                    <p>Размер бюстгальтера:</p>
                    <input 
                      type="text" 
                      value={tempFilters.size}
                      onChange={(e) => setTempFilters(prev => ({...prev, size: e.target.value}))}
                      placeholder="..."
                    />
                  </div>
                  <div className='setsize-div'>
                    <p>Размер чашки:</p>
                    <input 
                      type="text" 
                      value={tempFilters.cup_size}
                      onChange={(e) => setTempFilters(prev => ({...prev, cup_size: e.target.value}))}
                      placeholder="..."
                    />
                  </div>
                  <button className='searchsettings-button'
                  onClick={() => {
                    setFilters(tempFilters);
                    setPrice(tempPrice);
                    setSearchQuery(searchInput);
                    setHasSearched(true);  
                    handleCloseSearchSettings();
                  }}
                  >
                    ПОИСК
                  </button>
                  
                </motion.div>
            </AnimatePresence> 
          )}
          <input className='search-field' 
            type="text" 
            value={searchInput} 
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Поиск товаров..."
          />
          <button
            onClick={handleSearchClick}
            disabled={loading}
            style={{ marginLeft: '10px', padding: '5px 10px', cursor: 'pointer' }}
          >
            {data.images.filter(i => i.id === 3).map( item => (
              <img className='search-icon' key={item.id} src={item.image} alt="" />
            ))}
          </button>
        </div>
        
        {loading && (
          <div></div>
        )}

        {!loading && hasSearched && (
          <div className="grid grid-cols-5 gap-[24px] z-index-1 justify-center overflow-x-hidden justify-self-center w-[90%]">
            {filteredProducts.map(product => (
              
              <div key={product.id} class='card'>
                <ProductImage
                  product={product} 
                  className="preview-image"
                />
                <h3 className="font-bold">{product.name}</h3>
                <button
                  onClick={() => handleOpen(product)}
                  className="mt-2 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Подробнее
                </button>

                <Modal open={selectedProduct?.id === product.id} onClose={handleClose}>
                  <div className='modalframe'>
                    <div class="modalcard">
                      <div class='flex my-[0px]'>
                          <ProductImage 
                            variant={selectedColor}
                            product={product}
                            className="modal-image"
                          />
                          <div className='chardiv'>                       
                              <h3 className="font-semibold">Доступные цвета:</h3>
                              <div className="grid gap-x-4 w-fit my-8 relative">
                                  {product.variants.map(v => (
                                  <button
                                      key={v.id}
                                      type="button"
                                      onClick={() => {
                                          setSelectedColor(v)
                                          handleColorSelect(v)
                                          setSelectedSize(null)
                                      }}
                                      className={`color-button ${selectedColor?.id === v.id ? 'selected' : ''}`}
                                  >
                                      {v.product_color?.color}
                                  </button>
                                  ))}
                              </div>

                              {selectedColor && (
                                <AnimatePresence>
                                  <motion.div
                                    initial={{ x: 0, opacity: 1 }}
                                    animate={{ x: 420, opacity: 1 }}
                                    exit={{ x: 0, opacity: 1 }}
                                    transition={{ type: "tween", stiffness: 100, damping: 30 }}
                                    style={{
                                      zIndex: -3,
                                      width: "fit-content",
                                      height: "fit-content",
                                      paddingTop: '32',
                                      border: "1px solid black",
                                      borderRadius: '7px',
                                      padding: '12px',
                                      position: "absolute",
                                      top: 0,
                                      left: 'calc(100% - 362px)',
                                    }}
                                  >
                                    <h3 className="font-semibold mb-2 z-0">Выберите размер:</h3>
                                    <div className="sizediv">
                                      {product.units
                                        .filter(u => u?.product_variant?.id === selectedColor.id && u.stock > 0)
                                        .map(u => (
                                          <button
                                              key={u.id}
                                              type="button"
                                              onClick={() => setSelectedSize(u)}
                                              className={`size-button ${selectedSize?.id === u.id ? 'selected' : ''}`}
                                          >
                                              {u.product_size?.size}
                                              {u?.product_cup_size?.size}
                                          </button>
                                        ))}
                                    </div>
                                  </motion.div>
                                </AnimatePresence>                          
                              )}
                          </div>
                          {data.images.filter(i => i.id === 6).map( item => (
                            <img className='cross' onClick={handleClose} key={item.id} src={item.image} alt="" />
                          ))} 
                      </div>
                      <div className='info-div'>
                        <h1 class='font-bold'>Описание:</h1>
                        <h3 className='desc'>{product.description}</h3> 
                      </div>                                   
                      <div className='modal-footer'>
                       <div className={`order-div ${selectedColor && selectedSize ? 'selection-made' : 'no-selection'}`}>    
                              <div className='order-info-div'>
                                <h2 className="modal-name">{product.name}</h2>
                                {selectedColor && selectedSize && (
                                  <>
                                    <p className='modal-unit'>{selectedColor.product_color?.color} {selectedSize.product_size?.size}{selectedSize.product_cup_size?.size}</p>
                                  </>                             
                                )}
                                <h4 className='modal-price'>{product.price} руб.</h4>
                              </div>                                                                         
                              {selectedColor && selectedSize && (
                                <>
                                  <button className='add-to-cart-button'>ДОБАВИТЬ В КОРЗИНУ</button>
                                </>                             
                              )} 
                          </div>
                        </div>                                      
                    </div>
                  </div>          
                </Modal>
              </div>
            ))}
          </div>
        )}

        {!loading && hasSearched && filteredProducts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            Ничего не найдено
          </div>
        )}
    </div>
    
  )
}

export default Products