export type IBGEAddressApiReturnResult = {
  street: string,
  complement: string | null,
  district: string,
  districtId: number,
  city: string,
  cityId: number,
  ibgeId: number,
  state: string,
  stateShortname: string,
  zipcode: number
}