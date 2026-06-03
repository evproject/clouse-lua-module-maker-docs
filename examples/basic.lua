local module = {
  id = "quick_start",
  name = "Quick Start"
}

function module.on_load(ctx)
  ctx.log(module.name .. " loaded")
end

function module.on_tick(ctx)
  if not ctx.setting("enabled", true) then
    return
  end

  local player = ctx.player()
  if ctx.setting("debug", false) then
    ctx.log("tick " .. player.name .. " yaw=" .. tostring(player.yaw))
  end
end

function module.on_unload(ctx)
  ctx.log(module.name .. " unloaded")
end

return module
