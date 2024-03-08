import { createActorContext } from "@xstate/react";

import { homeMachine } from "./home.machine";

export const HomeMachineContext = createActorContext(homeMachine);
