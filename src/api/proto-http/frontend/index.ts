// Code generated by protoc-gen-typescript-http. DO NOT EDIT.
/* eslint-disable camelcase */
// @ts-nocheck

export type GetHeroRequest = {
};

export type GetHeroResponse = {
  hero: common_HeroFull | undefined;
  dictionary: common_Dictionary | undefined;
  rates: common_CurrencyMap | undefined;
};

export type common_HeroFull = {
  id: number | undefined;
  createdAt: wellKnownTimestamp | undefined;
  main: common_HeroInsert | undefined;
  ads: common_HeroInsert[] | undefined;
  productsFeatured: common_Product[] | undefined;
};

// Encoded using RFC 3339, where generated output will always be Z-normalized
// and uses 0, 3, 6 or 9 fractional digits.
// Offsets other than "Z" are also accepted.
type wellKnownTimestamp = string;

export type common_HeroInsert = {
  contentLink: string | undefined;
  contentType: string | undefined;
  exploreLink: string | undefined;
  exploreText: string | undefined;
};

export type common_Product = {
  id: number | undefined;
  createdAt: wellKnownTimestamp | undefined;
  updatedAt: wellKnownTimestamp | undefined;
  slug: string | undefined;
  productInsert: common_ProductInsert | undefined;
};

export type common_ProductInsert = {
  preorder: string | undefined;
  name: string | undefined;
  brand: string | undefined;
  sku: string | undefined;
  color: string | undefined;
  colorHex: string | undefined;
  countryOfOrigin: string | undefined;
  thumbnail: string | undefined;
  price: googletype_Decimal | undefined;
  salePercentage: googletype_Decimal | undefined;
  categoryId: number | undefined;
  description: string | undefined;
  hidden: boolean | undefined;
  targetGender: common_GenderEnum | undefined;
};

// A representation of a decimal value, such as 2.5. Clients may convert values
// into language-native decimal formats, such as Java's [BigDecimal][] or
// Python's [decimal.Decimal][].
// [BigDecimal]:
// https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
// [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
export type googletype_Decimal = {
  // The decimal value, as a string.
  // The string representation consists of an optional sign, `+` (`U+002B`)
  // or `-` (`U+002D`), followed by a sequence of zero or more decimal digits
  // ("the integer"), optionally followed by a fraction, optionally followed
  // by an exponent.
  // The fraction consists of a decimal point followed by zero or more decimal
  // digits. The string must contain at least one digit in either the integer
  // or the fraction. The number formed by the sign, the integer and the
  // fraction is referred to as the significand.
  // The exponent consists of the character `e` (`U+0065`) or `E` (`U+0045`)
  // followed by one or more decimal digits.
  // Services **should** normalize decimal values before storing them by:
  // - Removing an explicitly-provided `+` sign (`+2.5` -> `2.5`).
  // - Replacing a zero-length integer value with `0` (`.5` -> `0.5`).
  // - Coercing the exponent character to lower-case (`2.5E8` -> `2.5e8`).
  // - Removing an explicitly-provided zero exponent (`2.5e0` -> `2.5`).
  // Services **may** perform additional normalization based on its own needs
  // and the internal decimal implementation selected, such as shifting the
  // decimal point and exponent value together (example: `2.5e-1` <-> `0.25`).
  // Additionally, services **may** preserve trailing zeroes in the fraction
  // to indicate increased precision, but are not required to do so.
  // Note that only the `.` character is supported to divide the integer
  // and the fraction; `,` **should not** be supported regardless of locale.
  // Additionally, thousand separators **should not** be supported. If a
  // service does support them, values **must** be normalized.
  // The ENBF grammar is:
  // DecimalString =
  // [Sign] Significand [Exponent];
  // Sign = '+' | '-';
  // Significand =
  // Digits ['.'] [Digits] | [Digits] '.' Digits;
  // Exponent = ('e' | 'E') [Sign] Digits;
  // Digits = { '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' };
  // Services **should** clearly document the range of supported values, the
  // maximum supported precision (total number of digits), and, if applicable,
  // the scale (number of digits after the decimal point), as well as how it
  // behaves when receiving out-of-bounds values.
  // Services **may** choose to accept values passed as input even when the
  // value has a higher precision or scale than the service supports, and
  // **should** round the value to fit the supported scale. Alternatively, the
  // service **may** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC)
  // if precision would be lost.
  // Services **should** error with `400 Bad Request` (`INVALID_ARGUMENT` in
  // gRPC) if the service receives a value outside of the supported range.
  value: string | undefined;
};

export type common_GenderEnum =
  | "GENDER_ENUM_UNKNOWN"
  | "GENDER_ENUM_MALE"
  | "GENDER_ENUM_FEMALE"
  | "GENDER_ENUM_UNISEX";
export type common_Dictionary = {
  categories: common_Category[] | undefined;
  measurements: common_MeasurementName[] | undefined;
  orderStatuses: common_OrderStatus[] | undefined;
  paymentMethods: common_PaymentMethod[] | undefined;
  shipmentCarriers: common_ShipmentCarrier[] | undefined;
  sizes: common_Size[] | undefined;
  genders: common_Genders[] | undefined;
  orderFactors: common_OrderFactors[] | undefined;
  sortFactors: common_SortFactors[] | undefined;
  siteEnabled: boolean | undefined;
  maxOrderItems: number | undefined;
  baseCurrency: string | undefined;
};

export type common_Category = {
  id: number | undefined;
  name: common_CategoryEnum | undefined;
};

export type common_CategoryEnum =
  | "CATEGORY_ENUM_UNKNOWN"
  | "CATEGORY_ENUM_T_SHIRT"
  | "CATEGORY_ENUM_JEANS"
  | "CATEGORY_ENUM_DRESS"
  | "CATEGORY_ENUM_JACKET"
  | "CATEGORY_ENUM_SWEATER"
  | "CATEGORY_ENUM_PANT"
  | "CATEGORY_ENUM_SKIRT"
  | "CATEGORY_ENUM_SHORT"
  | "CATEGORY_ENUM_BLAZER"
  | "CATEGORY_ENUM_COAT"
  | "CATEGORY_ENUM_SOCKS"
  | "CATEGORY_ENUM_UNDERWEAR"
  | "CATEGORY_ENUM_BRA"
  | "CATEGORY_ENUM_HAT"
  | "CATEGORY_ENUM_SCARF"
  | "CATEGORY_ENUM_GLOVES"
  | "CATEGORY_ENUM_SHOES"
  | "CATEGORY_ENUM_BELT"
  | "CATEGORY_ENUM_OTHER";
export type common_MeasurementName = {
  id: number | undefined;
  name: common_MeasurementNameEnum | undefined;
};

export type common_MeasurementNameEnum =
  | "MEASUREMENT_NAME_ENUM_UNKNOWN"
  | "MEASUREMENT_NAME_ENUM_WAIST"
  | "MEASUREMENT_NAME_ENUM_INSEAM"
  | "MEASUREMENT_NAME_ENUM_LENGTH"
  | "MEASUREMENT_NAME_ENUM_RISE"
  | "MEASUREMENT_NAME_ENUM_HIPS"
  | "MEASUREMENT_NAME_ENUM_SHOULDERS"
  | "MEASUREMENT_NAME_ENUM_BUST"
  | "MEASUREMENT_NAME_ENUM_SLEEVE"
  | "MEASUREMENT_NAME_ENUM_WIDTH"
  | "MEASUREMENT_NAME_ENUM_HEIGHT";
export type common_OrderStatus = {
  id: number | undefined;
  name: common_OrderStatusEnum | undefined;
};

export type common_OrderStatusEnum =
  | "ORDER_STATUS_ENUM_UNKNOWN"
  | "ORDER_STATUS_ENUM_PLACED"
  | "ORDER_STATUS_ENUM_AWAITING_PAYMENT"
  | "ORDER_STATUS_ENUM_CONFIRMED"
  | "ORDER_STATUS_ENUM_SHIPPED"
  | "ORDER_STATUS_ENUM_DELIVERED"
  | "ORDER_STATUS_ENUM_CANCELLED"
  | "ORDER_STATUS_ENUM_REFUNDED";
// PaymentMethod represents the payment_method table
export type common_PaymentMethod = {
  id: number | undefined;
  name: common_PaymentMethodNameEnum | undefined;
  allowed: boolean | undefined;
};

export type common_PaymentMethodNameEnum =
  | "PAYMENT_METHOD_NAME_ENUM_UNKNOWN"
  | "PAYMENT_METHOD_NAME_ENUM_CARD"
  | "PAYMENT_METHOD_NAME_ENUM_ETH"
  | "PAYMENT_METHOD_NAME_ENUM_USDT_TRON"
  | "PAYMENT_METHOD_NAME_ENUM_USDT_SHASTA";
export type common_ShipmentCarrier = {
  id: number | undefined;
  shipmentCarrier: common_ShipmentCarrierInsert | undefined;
};

export type common_ShipmentCarrierInsert = {
  carrier: string | undefined;
  price: googletype_Decimal | undefined;
  allowed: boolean | undefined;
  description: string | undefined;
};

export type common_Size = {
  id: number | undefined;
  name: common_SizeEnum | undefined;
};

export type common_SizeEnum =
  | "SIZE_ENUM_UNKNOWN"
  | "SIZE_ENUM_XXS"
  | "SIZE_ENUM_XS"
  | "SIZE_ENUM_S"
  | "SIZE_ENUM_M"
  | "SIZE_ENUM_L"
  | "SIZE_ENUM_XL"
  | "SIZE_ENUM_XXL"
  | "SIZE_ENUM_OS";
export type common_Genders = {
  id: common_GenderEnum | undefined;
  name: string | undefined;
};

export type common_OrderFactors = {
  id: common_OrderFactor | undefined;
  name: string | undefined;
};

export type common_OrderFactor =
  | "ORDER_FACTOR_UNKNOWN"
  | "ORDER_FACTOR_ASC"
  | "ORDER_FACTOR_DESC";
export type common_SortFactors = {
  id: common_SortFactor | undefined;
  name: string | undefined;
};

export type common_SortFactor =
  | "SORT_FACTOR_UNKNOWN"
  | "SORT_FACTOR_CREATED_AT"
  | "SORT_FACTOR_UPDATED_AT"
  | "SORT_FACTOR_NAME"
  | "SORT_FACTOR_PRICE";
// CurrencyMap represents a map of currency codes to their rates.
export type common_CurrencyMap = {
  currencies: { [key: string]: common_CurrencyRate } | undefined;
};

// CurrencyRate represents the rate of a currency with a description.
export type common_CurrencyRate = {
  description: string | undefined;
  rate: googletype_Decimal | undefined;
};

export type GetProductRequest = {
  slug: string | undefined;
};

export type GetProductResponse = {
  product: common_ProductFull | undefined;
};

export type common_ProductFull = {
  product: common_Product | undefined;
  sizes: common_ProductSize[] | undefined;
  measurements: common_ProductMeasurement[] | undefined;
  media: common_ProductMedia[] | undefined;
  tags: common_ProductTag[] | undefined;
};

export type common_ProductSize = {
  id: number | undefined;
  quantity: googletype_Decimal | undefined;
  productId: number | undefined;
  sizeId: number | undefined;
};

export type common_ProductMeasurement = {
  id: number | undefined;
  productId: number | undefined;
  productSizeId: number | undefined;
  measurementNameId: number | undefined;
  measurementValue: googletype_Decimal | undefined;
};

export type common_ProductMedia = {
  id: number | undefined;
  createdAt: wellKnownTimestamp | undefined;
  productId: number | undefined;
  productMediaInsert: common_ProductMediaInsert | undefined;
};

export type common_ProductMediaInsert = {
  fullSize: string | undefined;
  thumbnail: string | undefined;
  compressed: string | undefined;
};

export type common_ProductTag = {
  id: number | undefined;
  productId: number | undefined;
  productTagInsert: common_ProductTagInsert | undefined;
};

export type common_ProductTagInsert = {
  tag: string | undefined;
};

export type GetProductsPagedRequest = {
  limit: number | undefined;
  offset: number | undefined;
  sortFactors: common_SortFactor[] | undefined;
  orderFactor: common_OrderFactor | undefined;
  filterConditions: common_FilterConditions | undefined;
};

export type common_FilterConditions = {
  from: string | undefined;
  to: string | undefined;
  onSale: boolean | undefined;
  color: string | undefined;
  categoryId: number | undefined;
  sizesIds: number[] | undefined;
  preorder: boolean | undefined;
  byTag: string | undefined;
};

export type GetProductsPagedResponse = {
  products: common_Product[] | undefined;
  total: number | undefined;
};

export type SubmitOrderRequest = {
  order: common_OrderNew | undefined;
};

export type common_OrderNew = {
  items: common_OrderItemInsert[] | undefined;
  shippingAddress: common_AddressInsert | undefined;
  billingAddress: common_AddressInsert | undefined;
  buyer: common_BuyerInsert | undefined;
  paymentMethodId: number | undefined;
  shipmentCarrierId: number | undefined;
  promoCode: string | undefined;
};

export type common_OrderItemInsert = {
  productId: number | undefined;
  quantity: number | undefined;
  sizeId: number | undefined;
};

export type common_AddressInsert = {
  street: string | undefined;
  houseNumber: string | undefined;
  apartmentNumber: string | undefined;
  city: string | undefined;
  state: string | undefined;
  country: string | undefined;
  postalCode: string | undefined;
};

export type common_BuyerInsert = {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  receivePromoEmails: boolean | undefined;
};

export type SubmitOrderResponse = {
  order: common_Order | undefined;
};

export type common_Order = {
  id: number | undefined;
  uuid: string | undefined;
  buyerId: number | undefined;
  placed: wellKnownTimestamp | undefined;
  modified: wellKnownTimestamp | undefined;
  paymentId: number | undefined;
  totalPrice: googletype_Decimal | undefined;
  orderStatusId: number | undefined;
  shipmentId: number | undefined;
  promoId: number | undefined;
};

export type UpdateOrderShippingCarrierRequest = {
  orderUuid: string | undefined;
  shippingCarrierId: number | undefined;
};

export type UpdateOrderShippingCarrierResponse = {
  order: common_OrderFull | undefined;
};

export type common_OrderFull = {
  order: common_Order | undefined;
  orderItems: common_OrderItem[] | undefined;
  payment: common_Payment | undefined;
  shipment: common_Shipment | undefined;
  promoCode: common_PromoCode | undefined;
  buyer: common_Buyer | undefined;
  billing: common_Address | undefined;
  shipping: common_Address | undefined;
};

export type common_OrderItem = {
  id: number | undefined;
  orderId: number | undefined;
  thumbnail: string | undefined;
  productName: string | undefined;
  productPrice: string | undefined;
  productSalePercentage: string | undefined;
  productBrand: string | undefined;
  categoryId: number | undefined;
  sku: string | undefined;
  orderItem: common_OrderItemInsert | undefined;
};

// Payment represents the payment table
export type common_Payment = {
  id: number | undefined;
  createdAt: wellKnownTimestamp | undefined;
  modifiedAt: wellKnownTimestamp | undefined;
  paymentInsert: common_PaymentInsert | undefined;
};

export type common_PaymentInsert = {
  paymentMethod: common_PaymentMethodNameEnum | undefined;
  transactionId: string | undefined;
  transactionAmount: googletype_Decimal | undefined;
  transactionAmountPaymentCurrency: googletype_Decimal | undefined;
  payer: string | undefined;
  payee: string | undefined;
  isTransactionDone: boolean | undefined;
};

// Shipment represents the shipment table
export type common_Shipment = {
  id: number | undefined;
  createdAt: wellKnownTimestamp | undefined;
  updatedAt: wellKnownTimestamp | undefined;
  carrierId: number | undefined;
  trackingCode: string | undefined;
  shippingDate: wellKnownTimestamp | undefined;
  estimatedArrivalDate: wellKnownTimestamp | undefined;
};

// PromoCode represents the promo_code table
export type common_PromoCode = {
  id: number | undefined;
  promoCodeInsert: common_PromoCodeInsert | undefined;
};

// PromoCodeInsert represents the nested structure within PromoCode
export type common_PromoCodeInsert = {
  code: string | undefined;
  freeShipping: boolean | undefined;
  discount: googletype_Decimal | undefined;
  expiration: wellKnownTimestamp | undefined;
  allowed: boolean | undefined;
  voucher: boolean | undefined;
};

export type common_Buyer = {
  id: number | undefined;
  billingAddressId: number | undefined;
  shippingAddressId: number | undefined;
  buyerInsert: common_BuyerInsert | undefined;
};

export type common_Address = {
  id: number | undefined;
  addressInsert: common_AddressInsert | undefined;
};

export type GetOrderByUUIDRequest = {
  orderUuid: string | undefined;
};

export type GetOrderByUUIDResponse = {
  order: common_OrderFull | undefined;
};

export type ValidateOrderItemsInsertRequest = {
  items: common_OrderItemInsert[] | undefined;
};

export type ValidateOrderItemsInsertResponse = {
  items: common_OrderItemInsert[] | undefined;
  subtotal: googletype_Decimal | undefined;
};

export type ValidateOrderByUUIDRequest = {
  orderUuid: string | undefined;
};

export type ValidateOrderByUUIDResponse = {
  order: common_OrderFull | undefined;
};

export type GetOrderInvoiceRequest = {
  orderUuid: string | undefined;
  paymentMethod: common_PaymentMethodNameEnum | undefined;
};

export type GetOrderInvoiceResponse = {
  expiredAt: wellKnownTimestamp | undefined;
  payment: common_PaymentInsert | undefined;
};

export type CancelOrderInvoiceRequest = {
  orderUuid: string | undefined;
};

export type CancelOrderInvoiceResponse = {
};

export type CheckCryptoPaymentRequest = {
  orderUuid: string | undefined;
};

export type CheckCryptoPaymentResponse = {
  payment: common_Payment | undefined;
};

export type ApplyPromoCodeRequest = {
  orderUuid: string | undefined;
  promoCode: string | undefined;
};

export type ApplyPromoCodeResponse = {
  order: common_OrderFull | undefined;
};

export type UpdateOrderItemsRequest = {
  orderUuid: string | undefined;
  items: common_OrderItemInsert[] | undefined;
};

export type UpdateOrderItemsResponse = {
  order: common_OrderFull | undefined;
};

export type SubscribeNewsletterRequest = {
  email: string | undefined;
};

export type SubscribeNewsletterResponse = {
};

export type UnsubscribeNewsletterRequest = {
  email: string | undefined;
};

export type UnsubscribeNewsletterResponse = {
};

export type GetArchivesPagedRequest = {
  limit: number | undefined;
  offset: number | undefined;
  orderFactor: common_OrderFactor | undefined;
};

export type GetArchivesPagedResponse = {
  archives: common_ArchiveFull[] | undefined;
};

// ArchiveFull represents a full archive with items.
export type common_ArchiveFull = {
  archive: common_Archive | undefined;
  items: common_ArchiveItem[] | undefined;
};

// Archive represents an archive entity.
export type common_Archive = {
  id: number | undefined;
  createdAt: wellKnownTimestamp | undefined;
  updatedAt: wellKnownTimestamp | undefined;
  archiveInsert: common_ArchiveInsert | undefined;
};

// ArchiveInsert represents the insertable fields of an archive.
export type common_ArchiveInsert = {
  heading: string | undefined;
  description: string | undefined;
};

// ArchiveItem represents an item within an archive.
export type common_ArchiveItem = {
  id: number | undefined;
  archiveId: number | undefined;
  archiveItemInsert: common_ArchiveItemInsert | undefined;
};

// ArchiveItemInsert represents the insertable fields of an archive item.
export type common_ArchiveItemInsert = {
  media: string | undefined;
  url: string | undefined;
  title: string | undefined;
};

export type GetArchiveByIdRequest = {
  id: number | undefined;
};

export type GetArchiveByIdResponse = {
  archive: common_ArchiveFull | undefined;
};

export interface FrontendService {
  // Get hero information
  GetHero(request: GetHeroRequest): Promise<GetHeroResponse>;
  // Get product brand and name
  GetProduct(request: GetProductRequest): Promise<GetProductResponse>;
  // Get paged products
  GetProductsPaged(request: GetProductsPagedRequest): Promise<GetProductsPagedResponse>;
  // Submit an order
  SubmitOrder(request: SubmitOrderRequest): Promise<SubmitOrderResponse>;
  UpdateOrderShippingCarrier(request: UpdateOrderShippingCarrierRequest): Promise<UpdateOrderShippingCarrierResponse>;
  // Retrieves an order by its ID
  GetOrderByUUID(request: GetOrderByUUIDRequest): Promise<GetOrderByUUIDResponse>;
  ValidateOrderItemsInsert(request: ValidateOrderItemsInsertRequest): Promise<ValidateOrderItemsInsertResponse>;
  ValidateOrderByUUID(request: ValidateOrderByUUIDRequest): Promise<ValidateOrderByUUIDResponse>;
  // Generate an invoice for the order or return the existing one
  GetOrderInvoice(request: GetOrderInvoiceRequest): Promise<GetOrderInvoiceResponse>;
  // Cancel an invoice for the order
  CancelOrderInvoice(request: CancelOrderInvoiceRequest): Promise<CancelOrderInvoiceResponse>;
  // CheckCryptoPayment checks the crypto payment if it has been received and updates the order status if it has been received
  CheckCryptoPayment(request: CheckCryptoPaymentRequest): Promise<CheckCryptoPaymentResponse>;
  // ApplyPromoCode applies promo code on selected order id
  ApplyPromoCode(request: ApplyPromoCodeRequest): Promise<ApplyPromoCodeResponse>;
  // Update order items
  UpdateOrderItems(request: UpdateOrderItemsRequest): Promise<UpdateOrderItemsResponse>;
  // Subscribe to the newsletter
  SubscribeNewsletter(request: SubscribeNewsletterRequest): Promise<SubscribeNewsletterResponse>;
  // Unsubscribe from the newsletter
  UnsubscribeNewsletter(request: UnsubscribeNewsletterRequest): Promise<UnsubscribeNewsletterResponse>;
  // GetArchivesPaged retrieves paged archives.
  GetArchivesPaged(request: GetArchivesPagedRequest): Promise<GetArchivesPagedResponse>;
  // GetArchiveById retrieves an archive by ID.
  GetArchiveById(request: GetArchiveByIdRequest): Promise<GetArchiveByIdResponse>;
}

type RequestType = {
  path: string;
  method: string;
  body: string | null;
};

type RequestHandler = (request: RequestType, meta: { service: string, method: string }) => Promise<unknown>;

export function createFrontendServiceClient(
  handler: RequestHandler
): FrontendService {
  return {
    GetHero(request) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const path = `api/frontend/hero`; // eslint-disable-line quotes
      const body = null;
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return handler({
        path: uri,
        method: "GET",
        body,
      }, {
        service: "FrontendService",
        method: "GetHero",
      }) as Promise<GetHeroResponse>;
    },
    GetProduct(request) { // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!request.slug) {
        throw new Error("missing required field request.slug");
      }
      const path = `api/frontend/product/${request.slug}`; // eslint-disable-line quotes
      const body = null;
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return handler({
        path: uri,
        method: "GET",
        body,
      }, {
        service: "FrontendService",
        method: "GetProduct",
      }) as Promise<GetProductResponse>;
    },
    GetProductsPaged(request) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const path = `api/frontend/products/paged`; // eslint-disable-line quotes
      const body = null;
      const queryParams: string[] = [];
      if (request.limit) {
        queryParams.push(`limit=${encodeURIComponent(request.limit.toString())}`)
      }
      if (request.offset) {
        queryParams.push(`offset=${encodeURIComponent(request.offset.toString())}`)
      }
      if (request.sortFactors) {
        request.sortFactors.forEach((x) => {
          queryParams.push(`sortFactors=${encodeURIComponent(x.toString())}`)
        })
      }
      if (request.orderFactor) {
        queryParams.push(`orderFactor=${encodeURIComponent(request.orderFactor.toString())}`)
      }
      if (request.filterConditions?.from) {
        queryParams.push(`filterConditions.from=${encodeURIComponent(request.filterConditions.from.toString())}`)
      }
      if (request.filterConditions?.to) {
        queryParams.push(`filterConditions.to=${encodeURIComponent(request.filterConditions.to.toString())}`)
      }
      if (request.filterConditions?.onSale) {
        queryParams.push(`filterConditions.onSale=${encodeURIComponent(request.filterConditions.onSale.toString())}`)
      }
      if (request.filterConditions?.color) {
        queryParams.push(`filterConditions.color=${encodeURIComponent(request.filterConditions.color.toString())}`)
      }
      if (request.filterConditions?.categoryId) {
        queryParams.push(`filterConditions.categoryId=${encodeURIComponent(request.filterConditions.categoryId.toString())}`)
      }
      if (request.filterConditions?.sizesIds) {
        request.filterConditions.sizesIds.forEach((x) => {
          queryParams.push(`filterConditions.sizesIds=${encodeURIComponent(x.toString())}`)
        })
      }
      if (request.filterConditions?.preorder) {
        queryParams.push(`filterConditions.preorder=${encodeURIComponent(request.filterConditions.preorder.toString())}`)
      }
      if (request.filterConditions?.byTag) {
        queryParams.push(`filterConditions.byTag=${encodeURIComponent(request.filterConditions.byTag.toString())}`)
      }
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return handler({
        path: uri,
        method: "GET",
        body,
      }, {
        service: "FrontendService",
        method: "GetProductsPaged",
      }) as Promise<GetProductsPagedResponse>;
    },
    SubmitOrder(request) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const path = `api/frontend/order/new`; // eslint-disable-line quotes
      const body = JSON.stringify(request);
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return handler({
        path: uri,
        method: "POST",
        body,
      }, {
        service: "FrontendService",
        method: "SubmitOrder",
      }) as Promise<SubmitOrderResponse>;
    },
    UpdateOrderShippingCarrier(request) { // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!request.orderUuid) {
        throw new Error("missing required field request.order_uuid");
      }
      const path = `api/frontend/order/${request.orderUuid}/update-shipping-carrier`; // eslint-disable-line quotes
      const body = JSON.stringify(request);
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return handler({
        path: uri,
        method: "POST",
        body,
      }, {
        service: "FrontendService",
        method: "UpdateOrderShippingCarrier",
      }) as Promise<UpdateOrderShippingCarrierResponse>;
    },
    GetOrderByUUID(request) { // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!request.orderUuid) {
        throw new Error("missing required field request.order_uuid");
      }
      const path = `api/frontend/orders/${request.orderUuid}`; // eslint-disable-line quotes
      const body = null;
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return handler({
        path: uri,
        method: "GET",
        body,
      }, {
        service: "FrontendService",
        method: "GetOrderByUUID",
      }) as Promise<GetOrderByUUIDResponse>;
    },
    ValidateOrderItemsInsert(request) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const path = `api/admin/orders/validate-items`; // eslint-disable-line quotes
      const body = JSON.stringify(request);
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return handler({
        path: uri,
        method: "POST",
        body,
      }, {
        service: "FrontendService",
        method: "ValidateOrderItemsInsert",
      }) as Promise<ValidateOrderItemsInsertResponse>;
    },
    ValidateOrderByUUID(request) { // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!request.orderUuid) {
        throw new Error("missing required field request.order_uuid");
      }
      const path = `api/admin/orders/validate/${request.orderUuid}`; // eslint-disable-line quotes
      const body = JSON.stringify(request);
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return handler({
        path: uri,
        method: "POST",
        body,
      }, {
        service: "FrontendService",
        method: "ValidateOrderByUUID",
      }) as Promise<ValidateOrderByUUIDResponse>;
    },
    GetOrderInvoice(request) { // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!request.orderUuid) {
        throw new Error("missing required field request.order_uuid");
      }
      if (!request.paymentMethod) {
        throw new Error("missing required field request.payment_method");
      }
      const path = `api/frontend/order/${request.orderUuid}/${request.paymentMethod}/invoice`; // eslint-disable-line quotes
      const body = JSON.stringify(request);
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return handler({
        path: uri,
        method: "POST",
        body,
      }, {
        service: "FrontendService",
        method: "GetOrderInvoice",
      }) as Promise<GetOrderInvoiceResponse>;
    },
    CancelOrderInvoice(request) { // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!request.orderUuid) {
        throw new Error("missing required field request.order_uuid");
      }
      const path = `api/frontend/order/${request.orderUuid}/invoice/cancel`; // eslint-disable-line quotes
      const body = JSON.stringify(request);
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return handler({
        path: uri,
        method: "POST",
        body,
      }, {
        service: "FrontendService",
        method: "CancelOrderInvoice",
      }) as Promise<CancelOrderInvoiceResponse>;
    },
    CheckCryptoPayment(request) { // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!request.orderUuid) {
        throw new Error("missing required field request.order_uuid");
      }
      const path = `api/frontend/order/check/${request.orderUuid}`; // eslint-disable-line quotes
      const body = JSON.stringify(request);
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return handler({
        path: uri,
        method: "POST",
        body,
      }, {
        service: "FrontendService",
        method: "CheckCryptoPayment",
      }) as Promise<CheckCryptoPaymentResponse>;
    },
    ApplyPromoCode(request) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const path = `api/frontend/order/promo/apply`; // eslint-disable-line quotes
      const body = JSON.stringify(request);
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return handler({
        path: uri,
        method: "POST",
        body,
      }, {
        service: "FrontendService",
        method: "ApplyPromoCode",
      }) as Promise<ApplyPromoCodeResponse>;
    },
    UpdateOrderItems(request) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const path = `api/frontend/order/update/items`; // eslint-disable-line quotes
      const body = JSON.stringify(request);
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return handler({
        path: uri,
        method: "POST",
        body,
      }, {
        service: "FrontendService",
        method: "UpdateOrderItems",
      }) as Promise<UpdateOrderItemsResponse>;
    },
    SubscribeNewsletter(request) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const path = `api/frontend/newsletter/subscribe`; // eslint-disable-line quotes
      const body = JSON.stringify(request);
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return handler({
        path: uri,
        method: "POST",
        body,
      }, {
        service: "FrontendService",
        method: "SubscribeNewsletter",
      }) as Promise<SubscribeNewsletterResponse>;
    },
    UnsubscribeNewsletter(request) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const path = `api/frontend/newsletter/unsubscribe`; // eslint-disable-line quotes
      const body = JSON.stringify(request);
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return handler({
        path: uri,
        method: "POST",
        body,
      }, {
        service: "FrontendService",
        method: "UnsubscribeNewsletter",
      }) as Promise<UnsubscribeNewsletterResponse>;
    },
    GetArchivesPaged(request) { // eslint-disable-line @typescript-eslint/no-unused-vars
      const path = `api/frontend/archive/paged`; // eslint-disable-line quotes
      const body = null;
      const queryParams: string[] = [];
      if (request.limit) {
        queryParams.push(`limit=${encodeURIComponent(request.limit.toString())}`)
      }
      if (request.offset) {
        queryParams.push(`offset=${encodeURIComponent(request.offset.toString())}`)
      }
      if (request.orderFactor) {
        queryParams.push(`orderFactor=${encodeURIComponent(request.orderFactor.toString())}`)
      }
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return handler({
        path: uri,
        method: "GET",
        body,
      }, {
        service: "FrontendService",
        method: "GetArchivesPaged",
      }) as Promise<GetArchivesPagedResponse>;
    },
    GetArchiveById(request) { // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!request.id) {
        throw new Error("missing required field request.id");
      }
      const path = `api/frontend/archive/${request.id}`; // eslint-disable-line quotes
      const body = null;
      const queryParams: string[] = [];
      let uri = path;
      if (queryParams.length > 0) {
        uri += `?${queryParams.join("&")}`
      }
      return handler({
        path: uri,
        method: "GET",
        body,
      }, {
        service: "FrontendService",
        method: "GetArchiveById",
      }) as Promise<GetArchiveByIdResponse>;
    },
  };
}

// @@protoc_insertion_point(typescript-http-eof)