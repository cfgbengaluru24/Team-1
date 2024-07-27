// src/types.ts
export interface MetricData {
    month: string;
    baselineIncome: number;
    baselineExpense: number;
    baselineProfit: number;
    endlineIncome?: number;
    endlineExpense?: number;
    endlineProfit?: number;
  }
  