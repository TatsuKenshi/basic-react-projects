import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/homepage/SharedLayout";
import SharedStateLayout from "./pages/state/SharedStateLayout";
import SharedEffectLayout from "./pages/effect/SharedEffectLayout";
import SharedFormsLayout from "./pages/forms/SharedFormsLayout";
import SharedUseRefLayout from "./pages/ref/SharedUseRefLayout";
import SharedContextLayout from "./pages/context/SharedContextLayout";
import Home from "./pages/homepage/Home";
import UseState from "./pages/state/UseState";
import UseEffect from "./pages/effect/UseEffect";
import Forms from "./pages/forms/Forms";
import UseRef from "./pages/ref/UseRef";
import ContextReducer from "./pages/context/ContextReducer";
import Error from "./pages/Error";
import Reminder from "./projects/01-birthday-reminder/Reminder";
import Tours from "./projects/02-tours/App";
import Reviews from "./projects/03-reviews/Reviews";
// import Questions from "./projects/04-questions/App";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* home page */}
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          {/* useState */}
          <Route path="usestate" element={<SharedStateLayout />}>
            <Route index element={<UseState />} />
            <Route path="reminder" element={<Reminder />} />
          </Route>
          {/* useEffect */}
          <Route path="useeffect" element={<SharedEffectLayout />}>
            <Route index element={<UseEffect />} />
            <Route path="tours" element={<Tours />} />
            <Route path="reviews" element={<Reviews />} />
            {/* <Route path="questions" element={<Questions />} /> */}
            <Route path="menu" element={<h2>Menu</h2>} />
            <Route path="tabs" element={<h2>Tabs</h2>} />
            <Route path="slider" element={<h2>Slider</h2>} />
          </Route>
          {/* forms */}
          <Route path="forms" element={<SharedFormsLayout />}>
            <Route index element={<Forms />} />
            <Route path="lorem" element={<h2>Lorem Ipsum</h2>} />
            <Route path="colors" element={<h2>Color Generator</h2>} />
            <Route path="grocery" element={<h2>Grocery Bud</h2>} />
          </Route>
          {/* useRef */}
          <Route path="useref" element={<SharedUseRefLayout />}>
            <Route index element={<UseRef />} />
            <Route path="navbar" element={<h2>Navbar</h2>} />
          </Route>
          {/* context/reducer */}
          <Route path="context" element={<SharedContextLayout />}>
            <Route index element={<ContextReducer />} />
            <Route path="modal" element={<h2>Modal and Sidebar</h2>} />
            <Route path="stripe" element={<h2>Stripe Submenus</h2>} />
            <Route path="cart" element={<h2>Cart</h2>} />
          </Route>
          {/* error */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
