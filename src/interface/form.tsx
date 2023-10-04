export type TformRow = {
  type: string;
  name: string;
  value: string;
  handleChange: (e: any) => any;
  labelText?: string;
};

export type TformRowSelect = {
  name: string;
  value: string;
  handleChange: (e: any) => any;
  labelText?: string;
  list: string[];
};
