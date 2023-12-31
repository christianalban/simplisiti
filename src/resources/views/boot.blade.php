<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{{ $title }}</title>
        @include('simplisiti::partials.styles')
  </head>
  <body>
    {!! $content !!}
    @include('simplisiti::partials.scripts')
  </body>
</html>
