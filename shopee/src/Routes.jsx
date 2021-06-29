import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { path } from './constants/path'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'
import MainLayout from './layouts/MainLayout/MainLayout'
import UnauthenticatedGuard from './guards/UnauthenticatedGuard'
import AuthenticatedGuard from './guards/AuthenticatedGuard'
import CartLayout from './layouts/CartLayout/CartLayout'
import Fallback from './components/Fallback/Fallback'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

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
          <Suspense fallback={<Fallback />}>
            <ErrorBoundary>
              <Home />
            </ErrorBoundary>
          </Suspense>
        </MainLayout>
      </Route>
      <Route path={path.productDetail} exact>
        <MainLayout>
          <Suspense fallback={<Fallback />}>
            <ErrorBoundary>
              <ProductDetail />
            </ErrorBoundary>
          </Suspense>
        </MainLayout>
      </Route>
      <Route path={path.login}>
        <UnauthenticatedGuard>
          <RegisterLayout title="Đăng nhập">
            <Suspense fallback={<Fallback />}>
              <ErrorBoundary>
                <Login />
              </ErrorBoundary>
            </Suspense>
          </RegisterLayout>
        </UnauthenticatedGuard>
      </Route>
      <Route path={path.register}>
        <UnauthenticatedGuard>
          <RegisterLayout title="Đăng ký">
            <Suspense fallback={<Fallback />}>
              <ErrorBoundary>
                <Register />
              </ErrorBoundary>
            </Suspense>
          </RegisterLayout>
        </UnauthenticatedGuard>
      </Route>
      <Route path={path.user}>
        <AuthenticatedGuard>
          <MainLayout>
            <Suspense fallback={<Fallback />}>
              <ErrorBoundary>
                <User />
              </ErrorBoundary>
            </Suspense>
          </MainLayout>
        </AuthenticatedGuard>
      </Route>
      <Route path={path.cart}>
        <AuthenticatedGuard>
          <CartLayout>
            <Suspense fallback={<Fallback />}>
              <ErrorBoundary>
                <Cart />
              </ErrorBoundary>
            </Suspense>
          </CartLayout>
        </AuthenticatedGuard>
      </Route>
      <Route path={path.notFound}>
        <Suspense fallback={<Fallback />}>
          <ErrorBoundary>
            <NotFound />
          </ErrorBoundary>
        </Suspense>
      </Route>
    </Switch>
  )
}
