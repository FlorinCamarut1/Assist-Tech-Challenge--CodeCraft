'use client';

import { getSession } from '@/actions/getSession';
import { getSystemRolesById } from '@/lib/getSystemRolesById';

import React, { createContext, useContext, useMemo, useReducer } from 'react';

type stateTypes = {
  isAdmin: boolean;
  isDepartmentManager: boolean;
  isProjectManager: boolean;
  isEmployee: boolean;
};
type actionType = {
  type: 'ADMIN' | 'DEP_MAN' | 'PROJ_MAN' | 'EMPLOYEE';
};

const defaultValues = {
  isAdmin: false,
  isDepartmentManager: false,
  isProjectManager: false,
  isEmployee: false,
};

interface RolesContextProviderProps {
  children: React.ReactNode;
}

const reducer = (state: stateTypes, action: actionType) => {
  switch (action.type) {
    case 'ADMIN':
      return { ...state, isAdmin: true };
    case 'DEP_MAN':
      return { ...state, isDepartmentManager: true };
    case 'EMPLOYEE':
      return { ...state, isEmployee: true };
    case 'PROJ_MAN':
      return { ...state, isProjectManager: true };

    default:
      return state;
  }
};

const RolesContext = createContext<{
  state: stateTypes;
  dispatch: React.Dispatch<actionType>;
}>({ state: defaultValues, dispatch: () => {} });

const RolesContextProvider = ({ children }: RolesContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, defaultValues);

  useMemo(() => {
    const data = [
      {
        name: 'Employee',
        id: '65e503afb3a2c9268b0f2f5e',
      },
      {
        name: 'Organization Administrator',
        id: '65ea4a36ba72b235486cbcc9',
      },
      {
        name: 'Project Manager',
        id: '65ea4a3eba72b235486cbcca',
      },
      {
        name: 'Department Manager',
        id: '65ea4a44ba72b235486cbccb',
      },
    ];
    const session = getSession();
    const systemRolesArray = getSystemRolesById(data, session?.systemRoleIDs);
    systemRolesArray.find((item) => {
      if (item === 'Organization Administrator') {
        dispatch({ type: 'ADMIN' });
      } else if (item === 'Employee') {
        dispatch({ type: 'EMPLOYEE' });
      } else if (item === 'Project Manager') {
        dispatch({ type: 'PROJ_MAN' });
      } else if (item === 'Department Manager') {
        dispatch({ type: 'DEP_MAN' });
      }
    });
  }, []);

  return (
    <RolesContext.Provider value={{ state, dispatch }}>
      {children}
    </RolesContext.Provider>
  );
};

const useValidateSystemRoles = () => {
  const values = useContext(RolesContext);
  return values;
};

export { RolesContextProvider, useValidateSystemRoles };
