// react
import { useEffect, useState } from "react";
// supabase
import { User } from "@supabase/supabase-js";
import { supabase } from "@/utils/initSupabase";
// types
import { useAppDispatch } from "@/interface/utils";
// redux
import { addUser } from "@/store/slice/authSlice";

interface AuthData {
  user: User | null;
  isLoading: boolean;
}

const useAuth = (): AuthData => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        dispatch(addUser(session.user));
        setUser(session.user);
      }
      setIsLoading(false);
    });

    const subscription = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        dispatch(addUser(session.user));
        setUser(session.user);
      } else {
        dispatch(addUser(null));
        setUser(null);
      }
      setIsLoading(false);
    });

    // return () => subscription.unsubscribe();

    return () => subscription.data.subscription.unsubscribe();
  }, [dispatch]);

  return { user, isLoading };
};

export default useAuth;
