<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title', 'ARSITE')</title>
    
    <!-- CSRF Token para Laravel Sanctum -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <!-- CSS -->
    @vite('resources/css/app.css')
</head>
<body class="min-h-screen">
    <div id="app" class="min-h-screen flex flex-col">
        <!-- Vue se montará aquí -->
    </div>
    
    <!-- Scripts -->
    @vite('resources/js/app.js')
</body>
</html>