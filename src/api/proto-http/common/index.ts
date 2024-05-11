// Code generated by protoc-gen-typescript-http. DO NOT EDIT.
/* eslint-disable camelcase */
// @ts-nocheck

// ArchiveFull represents a full archive with items.
export type ArchiveFull = {
  archive: Archive | undefined;
  items: ArchiveItem[] | undefined;
};

// Archive represents an archive entity.
export type Archive = {
  id: number | undefined;
  createdAt: wellKnownTimestamp | undefined;
  updatedAt: wellKnownTimestamp | undefined;
  archiveInsert: ArchiveInsert | undefined;
};

// Encoded using RFC 3339, where generated output will always be Z-normalized
// and uses 0, 3, 6 or 9 fractional digits.
// Offsets other than "Z" are also accepted.
type wellKnownTimestamp = string;

// ArchiveInsert represents the insertable fields of an archive.
export type ArchiveInsert = {
  heading: string | undefined;
  description: string | undefined;
};

// ArchiveItem represents an item within an archive.
export type ArchiveItem = {
  id: number | undefined;
  archiveId: number | undefined;
  archiveItemInsert: ArchiveItemInsert | undefined;
};

// ArchiveItemInsert represents the insertable fields of an archive item.
export type ArchiveItemInsert = {
  media: string | undefined;
  url: string | undefined;
  title: string | undefined;
};

// ArchiveNew represents a new archive with items for insertion.
export type ArchiveNew = {
  archive: ArchiveInsert | undefined;
  items: ArchiveItemInsert[] | undefined;
};

export type Address = {
  id: number | undefined;
  addressInsert: AddressInsert | undefined;
};

export type AddressInsert = {
  street: string | undefined;
  houseNumber: string | undefined;
  apartmentNumber: string | undefined;
  city: string | undefined;
  state: string | undefined;
  country: string | undefined;
  postalCode: string | undefined;
};

export type Buyer = {
  id: number | undefined;
  billingAddressId: number | undefined;
  shippingAddressId: number | undefined;
  buyerInsert: BuyerInsert | undefined;
};

export type BuyerInsert = {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  receivePromoEmails: boolean | undefined;
};

export type OrderFactor =
  | "ORDER_FACTOR_UNKNOWN"
  | "ORDER_FACTOR_ASC"
  | "ORDER_FACTOR_DESC";
export type SortFactor =
  | "SORT_FACTOR_UNKNOWN"
  | "SORT_FACTOR_CREATED_AT"
  | "SORT_FACTOR_UPDATED_AT"
  | "SORT_FACTOR_NAME"
  | "SORT_FACTOR_PRICE";
export type FilterConditions = {
  from: string | undefined;
  to: string | undefined;
  onSale: boolean | undefined;
  color: string | undefined;
  categoryId: number | undefined;
  sizesIds: number[] | undefined;
  preorder: boolean | undefined;
  byTag: string | undefined;
};

export type PaymentMethodNameEnum =
  | "PAYMENT_METHOD_NAME_ENUM_UNKNOWN"
  | "PAYMENT_METHOD_NAME_ENUM_CARD"
  | "PAYMENT_METHOD_NAME_ENUM_ETH"
  | "PAYMENT_METHOD_NAME_ENUM_USDT_TRON"
  | "PAYMENT_METHOD_NAME_ENUM_USDT_SHASTA";
// Payment represents the payment table
export type Payment = {
  id: number | undefined;
  createdAt: wellKnownTimestamp | undefined;
  modifiedAt: wellKnownTimestamp | undefined;
  paymentInsert: PaymentInsert | undefined;
};

export type PaymentInsert = {
  paymentMethod: PaymentMethodNameEnum | undefined;
  transactionId: string | undefined;
  transactionAmount: googletype_Decimal | undefined;
  transactionAmountPaymentCurrency: googletype_Decimal | undefined;
  payer: string | undefined;
  payee: string | undefined;
  isTransactionDone: boolean | undefined;
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

// PaymentMethod represents the payment_method table
export type PaymentMethod = {
  id: number | undefined;
  name: PaymentMethodNameEnum | undefined;
  allowed: boolean | undefined;
};

// PromoCodeInsert represents the nested structure within PromoCode
export type PromoCodeInsert = {
  code: string | undefined;
  freeShipping: boolean | undefined;
  discount: googletype_Decimal | undefined;
  expiration: wellKnownTimestamp | undefined;
  allowed: boolean | undefined;
  voucher: boolean | undefined;
};

// PromoCode represents the promo_code table
export type PromoCode = {
  id: number | undefined;
  promoCodeInsert: PromoCodeInsert | undefined;
};

export type ShipmentCarrierInsert = {
  carrier: string | undefined;
  price: googletype_Decimal | undefined;
  allowed: boolean | undefined;
  description: string | undefined;
};

export type ShipmentCarrier = {
  id: number | undefined;
  shipmentCarrier: ShipmentCarrierInsert | undefined;
};

// Shipment represents the shipment table
export type Shipment = {
  id: number | undefined;
  createdAt: wellKnownTimestamp | undefined;
  updatedAt: wellKnownTimestamp | undefined;
  carrierId: number | undefined;
  trackingCode: string | undefined;
  shippingDate: wellKnownTimestamp | undefined;
  estimatedArrivalDate: wellKnownTimestamp | undefined;
};

export type OrderStatusEnum =
  | "ORDER_STATUS_ENUM_UNKNOWN"
  | "ORDER_STATUS_ENUM_PLACED"
  | "ORDER_STATUS_ENUM_AWAITING_PAYMENT"
  | "ORDER_STATUS_ENUM_CONFIRMED"
  | "ORDER_STATUS_ENUM_SHIPPED"
  | "ORDER_STATUS_ENUM_DELIVERED"
  | "ORDER_STATUS_ENUM_CANCELLED"
  | "ORDER_STATUS_ENUM_REFUNDED";
export type OrderNew = {
  items: OrderItemInsert[] | undefined;
  shippingAddress: AddressInsert | undefined;
  billingAddress: AddressInsert | undefined;
  buyer: BuyerInsert | undefined;
  paymentMethodId: number | undefined;
  shipmentCarrierId: number | undefined;
  promoCode: string | undefined;
};

export type OrderItemInsert = {
  productId: number | undefined;
  quantity: number | undefined;
  sizeId: number | undefined;
};

export type OrderFull = {
  order: Order | undefined;
  orderItems: OrderItem[] | undefined;
  payment: Payment | undefined;
  shipment: Shipment | undefined;
  promoCode: PromoCode | undefined;
  buyer: Buyer | undefined;
  billing: Address | undefined;
  shipping: Address | undefined;
};

export type Order = {
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

export type OrderItem = {
  id: number | undefined;
  orderId: number | undefined;
  thumbnail: string | undefined;
  productName: string | undefined;
  productPrice: string | undefined;
  productSalePercentage: string | undefined;
  productBrand: string | undefined;
  categoryId: number | undefined;
  sku: string | undefined;
  orderItem: OrderItemInsert | undefined;
};

export type OrderStatus = {
  id: number | undefined;
  name: OrderStatusEnum | undefined;
};

export type CategoryEnum =
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
export type SizeEnum =
  | "SIZE_ENUM_UNKNOWN"
  | "SIZE_ENUM_XXS"
  | "SIZE_ENUM_XS"
  | "SIZE_ENUM_S"
  | "SIZE_ENUM_M"
  | "SIZE_ENUM_L"
  | "SIZE_ENUM_XL"
  | "SIZE_ENUM_XXL"
  | "SIZE_ENUM_OS";
export type MeasurementNameEnum =
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
export type GenderEnum =
  | "GENDER_ENUM_UNKNOWN"
  | "GENDER_ENUM_MALE"
  | "GENDER_ENUM_FEMALE"
  | "GENDER_ENUM_UNISEX";
export type Category = {
  id: number | undefined;
  name: CategoryEnum | undefined;
};

export type Size = {
  id: number | undefined;
  name: SizeEnum | undefined;
};

export type MeasurementName = {
  id: number | undefined;
  name: MeasurementNameEnum | undefined;
};

export type ProductNew = {
  product: ProductInsert | undefined;
  sizeMeasurements: SizeWithMeasurementInsert[] | undefined;
  media: ProductMediaInsert[] | undefined;
  tags: ProductTagInsert[] | undefined;
};

export type ProductInsert = {
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
  targetGender: GenderEnum | undefined;
};

export type SizeWithMeasurementInsert = {
  productSize: ProductSizeInsert | undefined;
  measurements: ProductMeasurementInsert[] | undefined;
};

export type ProductSizeInsert = {
  quantity: googletype_Decimal | undefined;
  sizeId: number | undefined;
};

export type ProductMeasurementInsert = {
  measurementNameId: number | undefined;
  measurementValue: googletype_Decimal | undefined;
};

export type ProductMediaInsert = {
  fullSize: string | undefined;
  thumbnail: string | undefined;
  compressed: string | undefined;
};

export type ProductTagInsert = {
  tag: string | undefined;
};

export type ProductFull = {
  product: Product | undefined;
  sizes: ProductSize[] | undefined;
  measurements: ProductMeasurement[] | undefined;
  media: ProductMedia[] | undefined;
  tags: ProductTag[] | undefined;
};

export type Product = {
  id: number | undefined;
  createdAt: wellKnownTimestamp | undefined;
  updatedAt: wellKnownTimestamp | undefined;
  slug: string | undefined;
  productInsert: ProductInsert | undefined;
};

export type ProductSize = {
  id: number | undefined;
  quantity: googletype_Decimal | undefined;
  productId: number | undefined;
  sizeId: number | undefined;
};

export type ProductMeasurement = {
  id: number | undefined;
  productId: number | undefined;
  productSizeId: number | undefined;
  measurementNameId: number | undefined;
  measurementValue: googletype_Decimal | undefined;
};

export type ProductMedia = {
  id: number | undefined;
  createdAt: wellKnownTimestamp | undefined;
  productId: number | undefined;
  productMediaInsert: ProductMediaInsert | undefined;
};

export type ProductTag = {
  id: number | undefined;
  productId: number | undefined;
  productTagInsert: ProductTagInsert | undefined;
};

export type ProductMeasurementUpdate = {
  sizeId: number | undefined;
  measurementNameId: number | undefined;
  measurementValue: googletype_Decimal | undefined;
};

export type SizeWithMeasurement = {
  productSize: ProductSize | undefined;
  measurements: ProductMeasurement[] | undefined;
};

export type Dictionary = {
  categories: Category[] | undefined;
  measurements: MeasurementName[] | undefined;
  orderStatuses: OrderStatus[] | undefined;
  paymentMethods: PaymentMethod[] | undefined;
  shipmentCarriers: ShipmentCarrier[] | undefined;
  sizes: Size[] | undefined;
  genders: Genders[] | undefined;
  orderFactors: OrderFactors[] | undefined;
  sortFactors: SortFactors[] | undefined;
  siteEnabled: boolean | undefined;
  maxOrderItems: number | undefined;
  baseCurrency: string | undefined;
};

export type Genders = {
  id: GenderEnum | undefined;
  name: string | undefined;
};

export type OrderFactors = {
  id: OrderFactor | undefined;
  name: string | undefined;
};

export type SortFactors = {
  id: SortFactor | undefined;
  name: string | undefined;
};

// CurrencyRate represents the rate of a currency with a description.
export type CurrencyRate = {
  description: string | undefined;
  rate: googletype_Decimal | undefined;
};

// CurrencyMap represents a map of currency codes to their rates.
export type CurrencyMap = {
  currencies: { [key: string]: CurrencyRate } | undefined;
};

export type HeroInsert = {
  contentLink: string | undefined;
  contentType: string | undefined;
  exploreLink: string | undefined;
  exploreText: string | undefined;
};

export type HeroFull = {
  id: number | undefined;
  createdAt: wellKnownTimestamp | undefined;
  main: HeroInsert | undefined;
  ads: HeroInsert[] | undefined;
  productsFeatured: Product[] | undefined;
};

export type Media = {
  // Media ID
  id: number | undefined;
  // Media created date
  createdAt: wellKnownTimestamp | undefined;
  // media
  media: MediaInsert | undefined;
};

export type MediaInsert = {
  // Full-size media URL
  fullSize: string | undefined;
  // Thumbnail media URL
  thumbnail: string | undefined;
  // Compressed media URL
  compressed: string | undefined;
};

// Subscriber represents the subscriber table
export type Subscriber = {
  id: number | undefined;
  name: string | undefined;
  email: string | undefined;
  receivePromoEmails: boolean | undefined;
};


// @@protoc_insertion_point(typescript-http-eof)