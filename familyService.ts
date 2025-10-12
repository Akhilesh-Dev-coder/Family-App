// familyService.ts
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export type FamilyMember = {
  id: string;
  name: string;
  image_url?: string;
  address?: string | null;
  phone?: string | null;
  occupation?: string | null;
  status?: string;
  spouseId?: string | null;
  parentId?: string | null;
  childrenIds?: string[];
};

export const getFamilyData = async (): Promise<FamilyMember[]> => {
  const querySnapshot = await getDocs(collection(db, "families")); // 👈 note: "families"
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as FamilyMember[];
};
