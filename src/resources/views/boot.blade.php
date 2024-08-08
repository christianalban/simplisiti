<!doctype html>
<html lang="en">
    <head>
        @include('simplisiti::partials.head')
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>{{ $title }}</title>
        <link rel="icon" href="/sp-assets/favicon.ico">
        <link rel="stylesheet" href="/vendor/simplisiti-css/ckeditor.css">
        <link rel="stylesheet" href="/vendor/simplisiti-css/simplisiti-component-editor/style.css">
        <style>
            .ck-content * {
                all: revert;
                text-align: initial;
            }
            .ck-content .table table,
            .ck-content .table table td,
            .ck-content .table table th {
                border: none;
            }

            .ck-content .page-break {
                visibility: hidden;
            }
        </style>
        @include('simplisiti::partials.styles')
  </head>
    <body {!! $app->getBodyManager()->getBodyAttributes()->implode(' ') !!}>
    @include('simplisiti::partials.body')
    {!! $content !!}
    @include('simplisiti::partials.scripts')
  </body>
</html>
