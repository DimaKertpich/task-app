import Vue from 'vue'
import App from './App.vue'
import VueApollo from 'vue-apollo'
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';

Vue.config.productionTip = false

Vue.use(VueApollo)

const key = 'NeiMxDDREwYAUj1k4piONmHNIRm4fwJq8YJHLzb4Ajv773JJLiYxCWiEa0w3XyG0'

const apolloClient = new ApolloClient({
  link: ApolloLink.from([
    new HttpLink({
      uri: 'https://grand-gorilla-43.hasura.app/v1/graphql',
      headers: {
        'x-hasura-admin-secret': key
      }
    })
  ]),
  cache: new InMemoryCache()
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

new Vue({
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
