const MoltinGateway = require('@moltin/sdk').gateway;

let client_id = 'Xs6pW0GygCzBko0QTWeaf3zT44ylP3hftHK372Dq2l'; //ключ необходим для подключения к moltin dashboard

if (process.env.REACT_APP_MOLTIN_CLIENT_ID) {
  client_id = process.env.REACT_APP_MOLTIN_CLIENT_ID;
}

const Moltin = MoltinGateway({
  client_id,
  application: 'react-Timur-store'
});
//экспорт продуктов/категорий их количества и цен с moltin dashboard
export const GetProducts = () =>
  Moltin.Products.With('files, main_images, collections').All();

export const GetProduct = ID => Moltin.Products.Get(ID);

export const GetCategories = () => Moltin.Categories.With('products').All();

export const GetCategory = ID => Moltin.Categories.Get(ID);

export const GetCollections = () => Moltin.Collections.With('products').All();

export const GetBrands = () => Moltin.Brands.All();

export const GetFile = ID => Moltin.Files.Get(ID);
//работа с корзиной
export const AddCart = (id, quantity) => Moltin.Cart.AddProduct(id, quantity);

export const UpdateCartPlus = (ID, quantity) =>
  Moltin.Cart.UpdateItemQuantity(ID, quantity + 1);

export const UpdateCartMinus = (ID, quantity) =>
  Moltin.Cart.UpdateItemQuantity(ID, quantity - 1);

export const UpdateCart = (ID, quantity) =>
  Moltin.Cart.UpdateItemQuantity(ID, quantity);

export const GetCartItems = () => Moltin.Cart.Items();
//работа с оплатой
export const Checkout = data => Moltin.Cart.Checkout(data);

export const GetOrder = ID => Moltin.Orders.Get(ID);

export const OrderPay = (ID, data) => Moltin.Orders.Payment(ID, data);

export const DeleteCart = () => Moltin.Cart.Delete();
