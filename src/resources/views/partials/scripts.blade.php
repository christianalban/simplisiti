@foreach($app->getScriptManager()->getScripts() as $script)
    <script src="{{ asset(config('simplisiti.scripts_path') . '/' . $script->name . '.js') }}"></script>
@endforeach
@foreach($app->getScriptManager()->getPluginScripts() as $plugin => $scripts)
    @foreach($scripts as $name => $script)
        <script src="{{ asset(config('simplisiti.scripts_path') . '/' . $plugin . '/' . $name . '.js') }}"></script>
    @endforeach
@endforeach
