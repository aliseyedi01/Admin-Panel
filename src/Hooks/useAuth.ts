import { useEffect, useState } from "react";
import { supabase } from "@/utils/initSupabase";
import { useAppDispatch } from "@/interface/utils";
import { setUser } from "@/store/slice/authSlice";
import { User } from "@supabase/supabase-js";

interface AuthData {
  userState: User | null;
  isLoading: boolean;
}

const useAuth = (): AuthData => {
  const dispatch = useAppDispatch();
  const [userState, setUserState] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        dispatch(setUser(session.user));
        setUserState(session.user);
      }
      setIsLoading(false);
    });

    const subscription = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        dispatch(setUser(session.user));
        setUserState(session.user);
      } else {
        dispatch(setUser(null));
        setUserState(null);
      }
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [dispatch]);

  return { userState, isLoading };
};

export default useAuth;
