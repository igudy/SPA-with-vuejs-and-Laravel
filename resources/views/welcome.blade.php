@extends('layouts.app')
@section('content')
{{-- Test navbar --}}

<div class="container">

    <router-link class="text-center" to='/'>Home</router-link>
    <router-link class="" to='/about'>About</router-link>
    <router-link class="" to='/contact'>Contact</router-link>

</div>

  <div class="containter">
    <router-view></router-view>
  </div>
@endsection