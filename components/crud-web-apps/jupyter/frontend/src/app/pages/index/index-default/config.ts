import {
  PropertyValue,
  StatusValue,
  ActionListValue,
  ActionIconValue,
  ActionButtonValue,
  MenuValue,
  DialogConfig,
  ComponentValue,
  TableConfig,
} from 'kubeflow';
import { ServerTypeComponent } from './server-type/server-type.component';

// --- Configs for the Confirm Dialogs ---
export function getDeleteDialogConfig(name: string): DialogConfig {
  return {
    title: {
      key: 'dialog.deleteDialogTitle',
      params: {name: name}
    },
    message: 'dialog.deleteDialogMessage',
    accept: 'common.deleteCaps',
    confirmColor: 'warn',
    cancel: 'common.cancelCaps',
    error: '',
    applying: 'dialog.deletingCaps',
    width: '600px',
  };
}

export function getStopDialogConfig(name: string): DialogConfig {
  return {
    title: {
      key: 'dialog.stopDialogTitle',
      params: {name: name}
    },
    message: 'dialog.stopDialogMessage',
    accept: 'common.stopCaps',
    confirmColor: 'primary',
    cancel: 'common.cancelCaps',
    error: '',
    applying: 'dialog.stoppingCaps',
    width: '600px',
  };
}

// --- Config for the Resource Table ---
export const defaultConfig: TableConfig = {
  columns: [
    {
      matHeaderCellDef: 'indexTableConfig.status',
      matColumnDef: 'status',
      value: new StatusValue(),
    },
    {
      matHeaderCellDef: 'indexTableConfig.name',
      matColumnDef: 'name',
      style: { width: '25%' },
      value: new PropertyValue({
        field: 'name',
        tooltipField: 'name',
        truncate: true,
      }),
    },
    {
      matHeaderCellDef: 'indexTableConfig.type',
      matColumnDef: 'type',
      value: new ComponentValue({
        component: ServerTypeComponent,
      }),
    },
    {
      matHeaderCellDef: 'indexTableConfig.age',
      matColumnDef: 'age',
      style: { width: '12%' },
      textAlignment: 'right',
      value: new PropertyValue({ field: 'age', truncate: true }),
    },
    {
      matHeaderCellDef: 'indexTableConfig.image',
      matColumnDef: 'image',
      style: { width: '30%' },
      value: new PropertyValue({
        field: 'shortImage',
        popoverField: 'image',
        truncate: true,
        style: { maxWidth: '300px' },
      }),
    },
    {
      matHeaderCellDef: 'indexTableConfig.gpus',
      matColumnDef: 'gpus',
      style: { width: '8%' },
      textAlignment: 'right',
      value: new PropertyValue({
        field: 'gpus.count',
        tooltipField: 'gpus.message',
      }),
    },
    {
      matHeaderCellDef: 'indexTableConfig.cpus',
      matColumnDef: 'cpu',
      style: { width: '8%' },
      textAlignment: 'right',
      value: new PropertyValue({ field: 'cpu' }),
    },
    {
      matHeaderCellDef: 'indexTableConfig.memory',
      matColumnDef: 'memory',
      style: { width: '8%' },
      textAlignment: 'right',
      value: new PropertyValue({ field: 'memory' }),
    },
    {
      matHeaderCellDef: 'indexTableConfig.volumes',
      matColumnDef: 'volumes',
      value: new MenuValue({ field: 'volumes', itemsIcon: 'storage' }),
    },

    {
      matHeaderCellDef: '',
      matColumnDef: 'actions',
      value: new ActionListValue([
        new ActionButtonValue({
          name: 'connect',
          tooltip: 'indexTableConfig.connectTooltip',
          color: 'primary',
          field: 'connectAction',
          text: 'indexTableConfig.connectCaps',
        }),
        new ActionIconValue({
          name: 'start-stop',
          tooltipInit: 'indexTableConfig.stopNotebookServer',
          tooltipReady: 'indexTableConfig.startNotebookServer',
          color: '',
          field: 'startStopAction',
          iconInit: 'material:stop',
          iconReady: 'material:play_arrow',
        }),
        new ActionIconValue({
          name: 'delete',
          tooltip: 'indexTableConfig.deleteTooltip',
          color: '',
          field: 'deleteAction',
          iconReady: 'material:delete',
        }),
      ]),
    },
  ],
};
