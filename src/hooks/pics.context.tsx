import React, {createContext, useState} from 'react';
import api from '../infra/http';
import {Listing} from '../types';

type ContextTypeProps = {
  children: React.ReactNode;
};

type ContextType = {
  threads: Listing;
  getThreads: () => void;
};

export const RedditContext = createContext({
  threads: {
    kind: '',
    data: {
      after: '',
      dist: 0,
      modhash: '',
      geo_filter: null,
      children: [],
      before: null,
    },
  },
  getThreads: () => {},
} as ContextType);

export const RedditContextProvider = (props: ContextTypeProps) => {
  const [threads, setThreads] = useState<Listing>({
    kind: '',
    data: {
      after: '',
      dist: 0,
      modhash: '',
      geo_filter: null,
      children: [],
      before: null,
    },
  });
  const getThreads = async () => {
    try {
      const {data} = await api.get<Listing>('/r/pics/hot.json');

      setThreads(data);

      return;
    } catch (err) {
      console.log(err);
      return {
        kind: '',
        data: {
          after: '',
          dist: 0,
          modhash: '',
          geo_filter: null,
          children: [],
          before: null,
        },
      };
    }
  };

  return (
    <RedditContext.Provider value={{getThreads, threads}}>
      {props.children}
    </RedditContext.Provider>
  );
};
