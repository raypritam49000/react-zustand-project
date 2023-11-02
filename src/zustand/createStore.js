import { create } from 'zustand';
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import EmployeeService from '../services/EmployeeService';

export const useEmployeeStore = create(
  devtools(immer((set) => ({
    state: {},
    getAllEmployee: async () => {
      try {
        set((state) => {
          state.loading = true;
        });
        const apiResponse = await EmployeeService.getEmployees();
        if (apiResponse.status === 200) {
          set((state) => {
            state.items = apiResponse.data;
            state.loading = false;
          });
        }
      } catch (error) {
        set((state) => {
          state.loading = false;
          state.error = error;
        });
      }
    },
    deleteEmployee: async (id) => {
      try {
        set((state) => {
          state.loading = true;
        });

        const apiResponse = await EmployeeService.deleteEmployee(id);
        if (apiResponse.status === 200) {
          set((state) => {
            state.items = state.items.filter((item) => item.id !== id);
            state.loading = false;
          });
        }

      } catch (error) {
        set((state) => {
          state.loading = false;
          state.error = error;
        });
      }
    },
    addEmployeeAction: async ({ formData, navigate }) => {
      try {
        set((state) => {
          state.loading = true;
        });

        const apiResponse = await EmployeeService.createEmployee(formData);
        if (apiResponse.status === 200) {
          set((state) => {
            state.items = apiResponse.data;
            state.loading = false;
          });
          navigate("/");
        }

      } catch (error) {
        set((state) => {
          state.loading = false;
          state.error = error;
        });
      }
    },
    getEmployeeAction: async (id) => {
      try {
        set((state) => {
          state.loading = true;
        });

        const apiResponse = await EmployeeService.getEmployeeById(id);
        if (apiResponse.status === 200) {
          set((state) => {
            state.items = apiResponse.data;
            state.loading = false;
          });
        }

      } catch (error) {
        set((state) => {
          state.loading = false;
          state.error = error;
        });
      }
    },
    updateEmployeeAction: async ({ id, formData, navigate }) => {
      try {
        set((state) => {
          state.loading = true;
        });

        const apiResponse = await EmployeeService.updateEmployee(formData, id);
        if (apiResponse.status === 200) {
          set((state) => {
            state.items = apiResponse.data;
            state.loading = false;
          });
          navigate("/");
        }

      } catch (error) {
        set((state) => {
          state.loading = false;
          state.error = error;
        });
      }
    },

  }))));



