@foreach($scripts as $script)
    <script src="{{ asset(config('simplisiti.scripts_path') . '/' . $script->name . '.js') }}" type="module"></script>
@endforeach
