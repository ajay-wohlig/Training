<template>
<div id="app">
  {{ info }}
</div>
</template>

<script type = 'module'>
import { axios } from "axios";
export default {
  name:'app',
  data () {
    return {
      info: null
    }
  },
  created () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  }
}
</script>