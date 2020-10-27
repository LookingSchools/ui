import React, { 
  ComponentClass,
  PureComponent,
  ReactType,
  ChangeEvent,
  
  FC, useState, useCallback } from "react";
import _ from "lodash";
import { cn } from "@bem-react/classname";
import { Defaultize } from "../../typings/utility-types";
import { Typography } from "../Typography/Typography";
import { Button } from "../Button/Button.bundle";
import { Separator, Thickness, Width } from "../Separator/Separator";
import { Grid, GridItem } from "../Grid/Grid.bundle";
import { Image, IImageProps } from "../Image/Image.bundle";
import { Amountpicker } from "../Amountpicker/Amountpicker.bundle";
import { Cut } from "../Cut/Cut.bundle";
import { Link } from "../Link/Link.bundle";
import { Price } from "../Price/Price.bundle";
import { Icon } from "../Icon/Icon.bundle";
import { TotalItem } from "./Item/Total-Item";
import "./Cart.scss";

import * as stubData from "./datastub"; // Удалить

export const cnCart = cn("Cart");

interface ICartItem {
  id: number;
  title: string;
  image: {
    src: IImageProps["src"];
    srcSet?: IImageProps["srcSet"];
  };
  price: number;
  oldPrice: number;
  weight: number;
}

export interface ICartProps {
    /**
   * HTML-атрибут для рендера кнопки
   * @default 'div'
   */
  as?: ReactType;

  items: ICartItem[];
  /**
   * Дополнительный класс.
   */
  className?: string;

  /**
   * Заголовок.
   */
  title?: string;

  /**
   * Подзаголовок.
   */
  subtitle?: string;
}

export interface ICartState {
  count?: number;
}

const defaultProps = {
  as: "div",
  title: "Корзина"
};

type DefaultProps = keyof typeof defaultProps;
type CartProps = Defaultize<ICartProps, DefaultProps>;

export const Cart = class extends PureComponent<CartProps> {

  static displayName = cnCart();

  static defaultProps = defaultProps;

  constructor(props: ICartProps) {
    super(props);
  
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  readonly state = {
    cartItems: this.props.items,
    count: this.props.items.length,
    arr: [],
    value: 0,
    weight: Number(_.reduce(
      _.map(this.props.items, item => item.weight),
      function(sum, n) {
        return sum + n;
      },
      0
    ).toFixed(1)),
    totalDiscount: Number(_.reduce(
      _.compact(
        _.map(
          this.props.items,
          item => item.oldPrice - item.price
        )
      ),
      function(sum, n) {
        return sum + n;
      },
      0
    )),
    totalPriceWithOutDiscount: Number(_.reduce(
      _.map(this.props.items, item => {
        let itemPrice = item.oldPrice ? item.oldPrice : item.price;
        return itemPrice;
      }),
      function(sum, n) {
        return sum + n;
      },
      0
    )),
    totalPrice: Number(_.reduce(
      _.map(this.props.items, item => item.price),
      function(sum, n) {
        return sum + n;
      },
      0
    ))
  }

  // componentDidMount() {
  //   this.setState({
  //     value: this.state.value
  //   });
  // }

  public setItems = (items: ICartItem[]) => {
    this.setState({
      items: items
    });
  };

  public setValue = (item: number, id: number) => {

    const newArr = _.reduce(this.state.arr, function(result, value, key) {
      (value.id === id) ? result.push({
          'id': value.id,
          'price': value.price,
          'total': value.price * item
        }) : result.push(value);
    
      return result;
    }, []);

    console.log('После', newArr);

    this.setState({
      arr: newArr
    });
  };

  public setWeight = (item: number) => {
    this.setState({
      weight: item
    });
  };

  public setCount = (item: number) => {
    this.setState({
      count: item
    });
  };

  public setTotalPriceWithOutDiscount = (item: number) => {
    this.setState({
      totalPriceWithOutDiscount: item
    });
  };

  public setTotalDiscount = (item: number) => {
    this.setState({
      totalDiscount: item
    });
  };
  
  public setTotalPrice = (item: number) => {
    this.setState({
      totalPrice: item
    });
  };

  public setCartItems = (items: number) => {
    this.setState({
      cartItems: items
    });
  };

  render() {
    const {
      title,
      subtitle,
      as,
      className,
      ...props
    } = this.props as CartProps;

    const { cartItems } = this.state;
    const Component = as;
    const groupItems = _.groupBy(cartItems, item => item.id);

    return (
      <Component
        {...props}
        className={cnCart(null, [className])}
      >
        {cartItems && cartItems.length > 0 ? (
          <>
            <div className={cnCart("CartTitle")}>
                <Typography tag="h1">{title}</Typography>
                <Typography tag="h4">{this.state.count}</Typography>
            </div>
            {this.renderItems(Object.values(groupItems))}
            {this.renderTotal()}
          </>
        ) : (
            this.renderEmptyCart()
        )}
      </Component>
    )
  }

  private renderItems = (cartItems: Array<ICartItem[]>) => {
    return cartItems ? cartItems.map((items: ICartItem[], index) => {

      _.findIndex(this.state.arr, function(o) { return o.id === items[0].id; }) ? this.state.arr.push({'id': items[0].id, 'price': items[0].price, 'total': items.length * items[0].price }) : null;

      const obj = _.find(this.state.arr, function(o) { return o.id === items[0].id; });

      const productLink = `/product/${items[0].id}`;

      const handleChangeCount = (event: ChangeEvent<HTMLButtonElement>) => {

        const { value } = event.target;
        const { delta } = event.target;

        if (delta === 1) {
          const itemWeight = items[0].weight;
          const newWeight = this.state.weight += Number(itemWeight.toFixed(1));
          const itemPriceWithOutDiscount = items[0].oldPrice ? items[0].oldPrice : items[0].price;
          const newPriceWithOutDiscount = this.state.totalPriceWithOutDiscount += Number(itemPriceWithOutDiscount);
          const itemTotalDiscount = items[0].oldPrice ? items[0].oldPrice - items[0].price : null;
          const newTotalDiscount  = this.state.totalDiscount += Number(itemTotalDiscount);
          const itemPrice = items[0].price;
          const newtotalPrice = this.state.totalPrice += Number(itemPrice);

          this.setCount(++this.state.count);
          this.setWeight(Number(newWeight.toFixed(1)));
          this.setTotalPriceWithOutDiscount(Number(newPriceWithOutDiscount));
          this.setTotalDiscount(Number(newTotalDiscount));
          this.setTotalPrice(Number(newtotalPrice));
        } else {
         
          const itemWeight = items[0].weight;
          const newWeight = this.state.weight -= Number(itemWeight.toFixed(1));
          const itemPriceWithOutDiscount = items[0].oldPrice ? items[0].oldPrice : items[0].price;
          const newPriceWithOutDiscount = this.state.totalPriceWithOutDiscount -= Number(itemPriceWithOutDiscount);
          const itemTotalDiscount = items[0].oldPrice ? items[0].oldPrice - items[0].price : null;
          const newTotalDiscount  = this.state.totalDiscount -= Number(itemTotalDiscount);
          const itemPrice = items[0].price;
          const newtotalPrice = this.state.totalPrice -= Number(itemPrice);
    
          this.setCount(--this.state.count);
          this.setWeight(Number(newWeight.toFixed(1)));
          this.setTotalPriceWithOutDiscount(Number(newPriceWithOutDiscount));
          this.setTotalDiscount(Number(newTotalDiscount));
          this.setTotalPrice(Number(newtotalPrice));
        }
    

        this.setValue(Number(value), items[0].id);
      };

      return (
        <div key={index}>
            <Grid className={cnCart("Grid", ["Cart-Left"])} >
              <GridItem className={cnCart("GridItem")}>
                <Link href={productLink} theme="black">
                  <div className={cnCart("Image")}>
                    <Image
                      src={items[0].image.src}
                      srcSet={items[0].image.srcSet}
                      alt={items[0].title}
                    />
                  </div>
                </Link>
                <Link href={productLink} theme="black">
                  <div className={cnCart("Title")}>
                    <Cut lineHeight={16} lines={4}>
                      {items[0].title}
                    </Cut>
                  </div>
                </Link>
              </GridItem>
              <GridItem className={cnCart("GridItem", ["Cart-Right"])}>
                <Amountpicker
                  value={items.length}
                  onChange={handleChangeCount}
                />
                <Price
                  price={items[0].price}
                  oldPrice={items[0].oldPrice}
                  theme="clear"
                  size="s"
                />
                <Price 
                  price={obj.total} 
                  size="s" />
                <Button
                  id={items[0].id.toString()}
                  size="m"
                  theme="clear"
                  pin="circle-circle"
                  onClick={this.handleRemoveItem}
                  icon={className => (
                    <Icon glyph="trash" size="m" className={className} />
                  )}
                />
              </GridItem>
            </Grid>
            <Separator
              thickness={Thickness.Thin}
              width={Width.Long}
              color="#D9D9D9"
              className={cnCart("Separator")}
            />
        </div>
      )
    }) : null;
  };

  private renderTotal = () => {

    const total = [];

    this.state.weight
      ? total.push({ name: "Вес заказа", value: `${this.state.weight} кг` })
      : null;
    this.state.count
      ? total.push({
          name: `Товары (${this.state.count})`,
          value: `${this.state.totalPriceWithOutDiscount} ₽`
        })
      : null;

    const orderDiscountStr = `− ${this.state.totalDiscount} ₽`;
    const totalPriceStr = `${this.state.totalPrice} ₽`;

    return (
      <div className={cnCart("OrderPrice")}>
        {total.map(({ name, value }, index) => (
          <TotalItem name={name} value={value} key={index} />
        ))}
        {this.state.totalDiscount > 0 && (
          <TotalItem
            name="Скидка"
            value={orderDiscountStr}
            className="OrderDiscount"
          />
        )}
        {this.state.totalPrice > 0 && (
          <TotalItem
            name="Итого"
            value={totalPriceStr}
            className="OrderPrice"
          />
        )}
      </div>
    )
  };

  private renderEmptyCart = () => {

  };

  private handleRemoveItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newCartItems = _.filter(this.state.cartItems, item => item.id !== Number(event.target.id));
    const deletedCartItems = _.filter(this.state.cartItems, item => item.id == Number(event.target.id));
    const price = deletedCartItems[0].oldPrice ? deletedCartItems[0].oldPrice : deletedCartItems[0].price;
    const priceSubtraction = this.state.totalPriceWithOutDiscount - (price * deletedCartItems.length);
    const weightSubtraction = this.state.weight - (deletedCartItems[0].weight * deletedCartItems.length);

    const totalPrice = Number(_.reduce(
      _.map(newCartItems, item => item.price),
      function(sum, n) {
        return sum + n;
      },
      0
    ));

    this.setCartItems(newCartItems);
    this.setTotalPriceWithOutDiscount(Number(priceSubtraction));
    this.setTotalPrice(totalPrice);
    this.setCount(newCartItems.length);
    this.setWeight(Number(weightSubtraction.toFixed(1)));
  };


// Приводим компонент к типу, в котором свойства имеющие значения по умолчанию остаются optional.
} as ComponentClass<ICartProps>;































// export const Cart: FC<ICartProps> = ({
//   className,
//   items,
//   title,
//   subtitle,
//   ...props
// }) => {

//   const generateEmptyCart = () => {};

//   let [cartItems, setCartItems] = useState(items);

//   let groupItems = _.groupBy(cartItems, item => item.id);

//   let [count, setCount] = useState(cartItems.length);

//   let [weight, setWeight] = useState(Number(_.reduce(
//     _.map(cartItems, item => item.weight),
//     function(sum, n) {
//       return sum + n;
//     },
//     0
//   ).toFixed(1)));

//   let [totalPriceWithOutDiscount, setTotalPriceWithOutDiscount] = useState(Number(_.reduce(
//     _.map(cartItems, item => {
//       let itemPrice = item.oldPrice ? item.oldPrice : item.price;
//       return itemPrice;
//     }),
//     function(sum, n) {
//       return sum + n;
//     },
//     0
//   )));

//   let [totalDiscount, setTotalDiscount] = useState(Number(_.reduce(
//     _.compact(
//       _.map(
//         cartItems,
//         item => item.oldPrice - item.price
//       )
//     ),
//     function(sum, n) {
//       return sum + n;
//     },
//     0
//   )));

//   let [totalPrice, setTotalPrice] = useState(Number(_.reduce(
//     _.map(cartItems, item => item.price),
//     function(sum, n) {
//       return sum + n;
//     },
//     0
//   )));

//   const handleRemoveItem = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
//     const newCartItems = _.filter(cartItems, item => item.id !== Number(event.target.id));
//     setCartItems(newCartItems);

//   }, [cartItems]);

//   const generateFullCart = (groupItems: object) => {
//     const arr =  Object.values(groupItems);
    
//     return arr ? arr.map((items: ICartItem[], index) => {
//       const [value, setValue] = useState(items.length || 1);

//       const productLink = `/product/${items[0].id}`;

//       const handleChangeCount = useCallback((event: React.ChangeEvent<HTMLButtonElement>) => {
//         const { value } = event.target;
//         const { delta } = event.target;
    
//         if (delta === 1) {
//           const itemWeight = items[0].weight;
//           const newWeight = weight += Number(itemWeight.toFixed(1));
//           const itemPriceWithOutDiscount = items[0].oldPrice ? items[0].oldPrice : items[0].price;
//           const newPriceWithOutDiscount = totalPriceWithOutDiscount += Number(itemPriceWithOutDiscount);
//           const itemTotalDiscount = items[0].oldPrice ? items[0].oldPrice - items[0].price : null;
//           const newTotalDiscount  = totalDiscount += Number(itemTotalDiscount);
//           const itemPrice = items[0].price;
//           const newtotalPrice = totalPrice += Number(itemPrice);
    
//           setCount(++count);
//           setWeight(Number(newWeight.toFixed(1)));
//           setTotalPriceWithOutDiscount(Number(newPriceWithOutDiscount));
//           setTotalDiscount(Number(newTotalDiscount));
//           setTotalPrice(Number(newtotalPrice));
//         } else {
         
//           const itemWeight = items[0].weight;
//           const newWeight = weight -= Number(itemWeight.toFixed(1));
//           const itemPriceWithOutDiscount = items[0].oldPrice ? items[0].oldPrice : items[0].price;
//           const newPriceWithOutDiscount = totalPriceWithOutDiscount -= Number(itemPriceWithOutDiscount);
//           const itemTotalDiscount = items[0].oldPrice ? items[0].oldPrice - items[0].price : null;
//           const newTotalDiscount  = totalDiscount -= Number(itemTotalDiscount);
//           const itemPrice = items[0].price;
//           const newtotalPrice = totalPrice -= Number(itemPrice);
    
//           setCount(--count);
//           setWeight(Number(newWeight.toFixed(1)));
//           setTotalPriceWithOutDiscount(Number(newPriceWithOutDiscount));
//           setTotalDiscount(Number(newTotalDiscount));
//           setTotalPrice(Number(newtotalPrice));
//         }
    
//         setValue(Number(value));
//       }, []);

//       return (
//         <div key={index}>
//           <>
//         <Grid className={cnCart("Grid", ["Cart-Left"])} >
//           <GridItem className={cnCart("GridItem")}>
//             <Link href={productLink} theme="black">
//               <div className={cnCart("Image")}>
//                 <Image
//                   src={items[0].image.src}
//                   srcSet={items[0].image.srcSet}
//                   alt={items[0].title}
//                 />
//               </div>
//             </Link>
//             <Link href={productLink} theme="black">
//               <div className={cnCart("Title")}>
//                 <Cut lineHeight={16} lines={4}>
//                   {items[0].title}
//                 </Cut>
//               </div>
//             </Link>
//           </GridItem>
//           <GridItem className={cnCart("GridItem", ["Cart-Right"])}>
//             <Amountpicker
//               value={value}
//               onChange={handleChangeCount}
//             />
//             <Price
//               price={items[0].price}
//               oldPrice={items[0].oldPrice}
//               theme="clear"
//               size="s"
//             />
//             <Price price={items[0].price * value} size="s" />
//             <Button
//               id={items[0].id.toString()}
//               size="m"
//               theme="clear"
//               pin="circle-circle"
//               onClick={handleRemoveItem}
//               icon={className => (
//                 <Icon glyph="trash" size="m" className={className} />
//               )}
//             />
//           </GridItem>
//         </Grid>
//         <Separator
//           thickness={Thickness.Thin}
//           width={Width.Long}
//           color="#D9D9D9"
//           className={cnCart("Separator")}
//         />
//       </>
//         </div>
//       )
//     }) : null;
//   };

//   const generateTotal = () => {

//     const total = [];

//     weight
//       ? total.push({ name: "Вес заказа", value: `${weight} кг` })
//       : null;
//       count
//       ? total.push({
//           name: `Товары (${count})`,
//           value: `${totalPriceWithOutDiscount} ₽`
//         })
//       : null;

//     const orderDiscountStr = `− ${totalDiscount} ₽`;
//     const totalPriceStr = `${totalPrice} ₽`;

//     return (
//       <div className={cnCart("OrderPrice")}>
//         {total.map(({ name, value }, index) => (
//           <TotalItem name={name} value={value} key={index} />
//         ))}
//         {totalDiscount > 0 && (
//           <TotalItem
//             name="Скидка"
//             value={orderDiscountStr}
//             className="OrderDiscount"
//           />
//         )}
//         {totalPrice > 0 && (
//           <TotalItem
//             name="Итого"
//             value={totalPriceStr}
//             className="OrderPrice"
//           />
//         )}
//       </div>
//     );
//   };

//   function getItems() {
//     return stubData.dataDefault.items;
//   }

//   return (
//     <div {...props} className={cnCart(null, [className])}>
//         <>
//           {items && items.length > 0 ? (
//             <>
//             <div className={cnCart("CartTitle")}>
//                 <Typography tag="h1">{title}</Typography>
//                 <Typography tag="h4">{count}</Typography>
//             </div>
//             { generateFullCart(groupItems) }



//             {generateTotal()}
//             </>
//         ) : (
//             generateEmptyCart()
//         )}
//         <Block items={getItems()} />
//         </>
//     </div>
//   );
// };

Cart.displayName = cnCart();
