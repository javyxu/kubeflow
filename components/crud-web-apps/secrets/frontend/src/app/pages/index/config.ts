import {
  PropertyValue,
  TableConfig,
} from 'kubeflow';

export const tableConfig: TableConfig = {
  columns: [
    {
      matHeaderCellDef: 'secretTable.name',
      matColumnDef: 'name',
      style: { width: '15%' },
      value: new PropertyValue({
        field: 'name',
        tooltipField: 'name',
        truncate: true,
      }),
    },
    {
      matHeaderCellDef: 'secretTable.label',
      matColumnDef: 'labels',
      textAlignment: 'left',
      style: { width: '25%' },
      value: new PropertyValue({ 
        field: 'labels', 
        valueFn: (rows) => {
          return JSON.stringify((new Map(Object.entries(rows))).get("labels"));
        },
        truncate: true }),
    },
    {
      matHeaderCellDef: 'secretTable.annotation',
      matColumnDef: 'annotations',
      textAlignment: 'left',
      style: { width: '35%' },
      value: new PropertyValue({ 
        field: 'annotations', 
        valueFn: (rows) => {
          return JSON.stringify((new Map(Object.entries(rows))).get("annotations"));
        },
        truncate: true }),
    },
    {
      matHeaderCellDef: 'secretTable.type',
      matColumnDef: 'type',
      textAlignment: 'left',
      style: { width: '15%' },
      value: new PropertyValue({ field: 'type', truncate: true }),
    },
    {
      matHeaderCellDef: 'secretTable.age',
      matColumnDef: 'create',
      textAlignment: 'left',
      style: { width: '10%' },
      value: new PropertyValue({
        field: 'age.uptime',
        tooltipField: 'age.timestamp',
      }),
    },

    // the apps should import the actions they want
  ],
};
