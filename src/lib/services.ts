import {
  type DentalServiceItem,
  dentalServices,
  getDentalServiceBySlug,
} from "@/data/dental-services";
import {
  type SkinServiceItem,
  skinServices,
  getSkinServiceBySlug,
} from "@/data/skin-services";

export {
  type DentalServiceItem,
  type SkinServiceItem,
  dentalServices,
  skinServices,
  getDentalServiceBySlug,
  getSkinServiceBySlug,
};

export type ClinicServiceItem = DentalServiceItem | SkinServiceItem;

export const allServices: ClinicServiceItem[] = [
  ...dentalServices,
  ...skinServices,
];

export function getServiceBySlug(slug: string): ClinicServiceItem | undefined {
  return getDentalServiceBySlug(slug) ?? getSkinServiceBySlug(slug);
}
