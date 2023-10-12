"use client";
import ClientOnly from "@/components/ClientOnly";
import Spinner from "@/components/Spinner";
import { isEmpty } from "@/lib/utils/isEmpty";
import { getUserInfos } from "@/redux/slices/userSlice";
import { useEffect, useLayoutEffect } from "react";
import { createContext, useState } from "react";
import { useDispatch } from "react-redux";

export const UidContext = createContext();

export const UidContextProvider = ({ children }) => {
  const [uid, setUid] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    (async () => {
      await fetch("/api/auth/jwt")
        .then((r) => r.json())
        .then((d) => {
          if (d?.error) {
            setUid("");
          } else {
            setUid(d);
          }
        })
        .catch((error) => console.log(error));
    })();
  }, []);
  useEffect(() => {
    if (!isEmpty(uid)) {
      (async () => {
        try {
          setIsLoading(false);
          await fetch(`/api/user/${uid.id}`)
            .then((r) => r.json())
            .then((d) => {
              setIsLoading(false);
              if (d?.error) {
                setUid("");
              } else {
                dispatch(getUserInfos(d));
              }
            });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [uid]);
  if (isLoading) return <Spinner />;
  return (
    <ClientOnly>
      <UidContext.Provider value={{ uid, isLoading }}>
        <>{children}</>
      </UidContext.Provider>
    </ClientOnly>
  );
};
