import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { path } from './constants/path'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'
import MainLayout from './layouts/MainLayout/MainLayout'
import UnauthenticatedGuard from './guards/UnauthenticatedGuard'
import AuthenticatedGuard from './guards/AuthenticatedGuard'
import CartLayout from './layouts/CartLayout/CartLayout'
import Loading from './components/Loading/Loading'

const Home = lazy(() => import('./pages/Home/Home'))
const ProductDetail = lazy(() => import('./pages/ProductDetail/ProductDetail'))
const User = lazy(() => import('./pages/User/User'))
const Cart = lazy(() => import('./pages/Cart/Cart'))
const Register = lazy(() => import('./pages/Auth/Register/Register'))
const Login = lazy(() => import('./pages/Auth/Login/Login'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))

export default function Routes() {
  return (
    <Switch>
      <Route path={path.home} exact>
        <MainLayout>
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        </MainLayout>
      </Route>
      <Route path={path.productDetail} exact>
        <MainLayout>
          <Suspense fallback={<Loading />}>
            <ProductDetail />
          </Suspense>
        </MainLayout>
      </Route>
      <Route path={path.login}>
        <UnauthenticatedGuard>
          <RegisterLayout title="Đăng nhập">
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          </RegisterLayout>
        </UnauthenticatedGuard>
      </Route>
      <Route path={path.register}>
        <UnauthenticatedGuard>
          <RegisterLayout title="Đăng ký">
            <Suspense fallback={<Loading />}>
              <Register />
            </Suspense>
          </RegisterLayout>
        </UnauthenticatedGuard>
      </Route>
      <Route path={path.user}>
        <AuthenticatedGuard>
          <MainLayout>
            <Suspense fallback={<Loading />}>
              <User />
            </Suspense>
          </MainLayout>
        </AuthenticatedGuard>
      </Route>
      <Route path={path.cart}>
        <AuthenticatedGuard>
          <CartLayout>
            <Suspense fallback={<Loading />}>
              <Cart />
            </Suspense>
          </CartLayout>
        </AuthenticatedGuard>
      </Route>
      <Route path={path.notFound}>
        <Suspense fallback={<Loading />}>
          <NotFound />
        </Suspense>
      </Route>
    </Switch>
  )
}
