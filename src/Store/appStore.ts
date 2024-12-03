import { create } from "zustand";

interface yorestore {
  bill: number;
  setBill: (val: number) => void;
  tipAmount: number;
  total: number;
  resetButton: () => void;
  people: number;
  setPeople: (val: number) => void;
  calculateTip: () => void;
  setTipPercentage: (val: number) => void;
  tipPercentage: number;
  clicked: number | null;
  setClicked: (val: number | null) => void;
}
export const appStore = create<yorestore>((set, get) => ({
  bill: 0,
  setBill: (val: number) => set(() => ({ bill: val })),
  tipAmount: 0,
  total: 0,
  people: 0,
  setPeople: (val: number) => set(() => ({ people: val })),
  setTipPercentage: (val: number) => set(() => ({ tipPercentage: val })),
  tipPercentage: 0,
  clicked: null,
  setClicked: (val: number | null) => set(() => ({ clicked: val })),

  resetButton: () => {
    set({
      bill: 0,
      people: 0,
      tipPercentage: 0,
      tipAmount: 0,
      total: 0,
      clicked: null,
    });
  },

  //Calculating tip
  calculateTip: () => {
    const { bill, tipPercentage, people } = get();

    if (bill > 0 && people > 0) {
      const amountTip = bill * (tipPercentage / 100);
      const tipPerPerson = amountTip / people;
      const totalPerPerson = (bill + amountTip) / people;
      set({
        tipAmount: Number(tipPerPerson.toFixed(2)),
        total: Number(totalPerPerson.toFixed(2)),
      });
    } else {
      set({
        tipAmount: 0,
        total: 0,
      });
    }
  },
}));
