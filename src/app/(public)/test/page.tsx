import { $user, setUserDate } from "./store.server";
import { Comp } from "./comp";
import { UserProxy } from "./store.client";

export default async function Page() {
  setUserDate({ name: "johDoe", age: 31 });

  return (
    <UserProxy proxyData={$user.get()}>
      <div>
        <h1>===== Client Side =====</h1>
        <h2>Name: {$user.get().name}</h2>
        <h2>Age: {$user.get().age}</h2>
        <Comp />
      </div>
    </UserProxy>
  );
}
