<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title', 'Ar-Site Integradores')</title>

    <!-- CSRF Token para Laravel Sanctum -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Favicons para todas las plataformas -->
    <link rel="icon" type="image/png" href="{{ asset('img/favicon/favicon-96x96.png') }}" sizes="96x86" />
    <link rel="icon" type="image/svg+xml" href="{{ asset('img/favicon/favicon.svg') }}" />
    <link rel="shortcut icon" href="{{ asset('img/favicon/favicon.ico') }}" />
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('img/favicon/apple-touch-icon.png') }}" />
    <meta name="apple-mobile-web-app-title" content="Ar-Site Integradores" />
    <link rel="manifest" href="{{ asset('img/favicon/site.webmanifest') }}" />
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