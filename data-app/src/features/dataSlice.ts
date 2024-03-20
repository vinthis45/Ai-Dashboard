import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Type for the fetched data
interface FetchedData {
  insightSummary: {
    total_queries: number;
    successful_queries: number;
    failed_queries: number;
    average_response_time: number;
  };
  category_distribution: {
    [category: string]: number;
  };
  response_times: {
    day_wise: { date: string; average_time: number }[];
    week_wise: { week: string; average_time: number }[];
  };
  user_satisfaction: {
    ratings: { rating: number; count: number }[];
  };
  usage_statistics: {
    by_platform: { [platform: string]: number };
    by_country: { [country: string]: number };
  };
}

// Async function to fetch data
export const fetchData = createAsyncThunk<FetchedData>(
  'data/fetchData',
  async () => {
    const response = await axios.get('/data/ai-data.json');
    return await response.data;
  }
);

// State type
interface DataState extends FetchedData {
  loading: boolean;
  error: string | null;
  data: FetchedData | null; 
}

const initialState: DataState = {
  insightSummary: {
    total_queries: 0,
    successful_queries: 0,
    failed_queries: 0,
    average_response_time: 0,
  },
  category_distribution: {
    small_talk: 0,
    technical_support: 0,
    sales_inquiries: 0,
    customer_service: 0,
  },
  response_times: {
    day_wise: [],
    week_wise: [],
  },
  user_satisfaction: {
    ratings: [],
  },
  usage_statistics: {
    by_platform: {},
    by_country: {},
  },
  loading: false,
  error: null,
  data: null, 
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload; 
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export default dataSlice.reducer;
