@foreach($app->getStyleManager()->getPluginStyles() as $plugin => $styles)
    @foreach($styles as $name => $style)
        <link rel="stylesheet" href="{{ asset(config('simplisiti.styles_path') . '/' . $plugin . '/' . $name . '.css') }}" />
    @endforeach
@endforeach
@foreach($app->getStyleManager()->getStyles() as $style)
    <link rel="stylesheet" href="{{ asset(config('simplisiti.styles_path') . '/' . $style->name . '.css') }}" />
@endforeach
