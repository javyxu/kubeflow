import {
  PropertyValue,
  StatusValue,
  TableConfig,
} from 'kubeflow';

export const tableConfig: TableConfig = {
  columns: [
    {
      matHeaderCellDef: 'volumeTable.status',
      matColumnDef: 'status',
      style: { width: '1%' },
      value: new StatusValue(),
    },
    {
      matHeaderCellDef: 'volumeTable.name',
      matColumnDef: 'name',
      style: { width: '25%' },
      value: new PropertyValue({
        field: 'name',
        tooltipField: 'name',
        truncate: true,
      }),
    },
    {
      matHeaderCellDef: 'volumeTable.age',
      matColumnDef: 'age',
      textAlignment: 'right',
      style: { width: '10%' },
      value: new PropertyValue({
        field: 'age.uptime',
        tooltipField: 'age.timestamp',
      }),
    },
    {
      matHeaderCellDef: 'volumeTable.size',
      matColumnDef: 'size',
      textAlignment: 'right',
      style: { width: '10%' },
      value: new PropertyValue({ field: 'capacity', truncate: true }),
    },
    {
      matHeaderCellDef: 'volumeTable.accessMode',
      matColumnDef: 'modes',
      style: { width: '15%' },
      value: new PropertyValue({ field: 'modes', truncate: true }),
    },
    {
      matHeaderCellDef: 'volumeTable.storageClass',
      matColumnDef: 'class',
      style: { width: '10%' },
      value: new PropertyValue({ field: 'class', truncate: true }),
    },

    // the apps should import the actions they want
  ],
};
